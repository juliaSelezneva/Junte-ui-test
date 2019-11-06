import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter as filtering, finalize } from 'rxjs/operators';
import { TableFeatures, UI } from '../../enum/ui';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter } from '../../models/table';
import { isEqual } from '../../utils/equal';
import { Subscriptions } from '../../utils/subscriptions';
import { TableColumnComponent } from './column/table-column.component';

const FILTER_DELAY = 500;

@Component({
  selector: 'jnt-table',
  templateUrl: './table.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableComponent),
      multi: true
    }
  ]
})
export class TableComponent implements OnInit, OnDestroy, ControlValueAccessor {

  private _count: number;
  private subscriptions = new Subscriptions();

  ui = UI;
  progress = {loading: false};
  source: any[] = [];
  sort = new FormControl(null);
  offset = new FormControl(DEFAULT_OFFSET);
  first = new FormControl(DEFAULT_FIRST);
  page = new FormControl((+this.offset.value / +this.first.value) + 1);

  filterForm = this.builder.group({
    q: [''],
    sort: this.sort,
    page: this.page,
    offset: this.offset,
    first: this.first
  });

  filter: any = new DefaultSearchFilter({
    offset: DEFAULT_OFFSET,
    first: DEFAULT_FIRST
  });

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent>;

  @ContentChild('rowTemplate', {static: false})
  rowTemplate: TemplateRef<any>;

  @ContentChild('rowActions', {static: false})
  rowActionsTemplate: TemplateRef<any>;

  @ContentChild('actions', {static: false})
  actionsTemplate: TemplateRef<any>;

  @ContentChild('filters', {static: false})
  filtersTemplate: TemplateRef<any>;

  @HostBinding('attr.features')
  @Input() features: TableFeatures[] = [];

  @Input() fetcher: Function;
  @Output() reloaded = new EventEmitter<any>();

  set count(count: number) {
    this._count = count;
  }

  get count() {
    return this._count;
  }

  get pagesCount() {
    return Math.ceil(this.count / this.filterForm.get('first').value);
  }

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm.valueChanges.pipe(
      filtering(() => !!this.fetcher),
      debounceTime(FILTER_DELAY),
      distinctUntilChanged((val1, val2) => isEqual(val1, val2))
    ).subscribe(filter => {
      if (filter.first !== this.filter.first) {
        filter.page = 1;
      }
      filter.offset = (filter.page - 1) * filter.first;
      this.filter = {...this.filter, ...filter};
      this.onChange(this.filter);
      // this.load();
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  load() {
    if (!!this.fetcher) {
      this.progress.loading = true;
      console.log('load:', this.filter);
      this.subscriptions.push('rows', this.fetcher(this.filter)
        .pipe(finalize(() => this.progress.loading = false))
        .subscribe(resp => {
          this.source = resp.results;
          this.count = resp.count;
        }));
    }
  }

  sorting(sort: string) {
    this.filterForm.patchValue({orderBy: this.sort.value === sort ? `-${sort}` : sort});
  }

  writeValue(value: any) {
    if (!!value) {
      this.filterForm.patchValue({
        first: value.first,
        offset: value.offset,
        page: Math.floor(value.offset / value.first) + 1
      });

      const filter = {...this.filter, ...value};
      for (let param in filter) {
        if (filter.hasOwnProperty(param) && filter[param] === null || filter[param] === undefined || filter[param] === '') {
          delete filter[param];
        }
      }
      console.log('value', filter);
      this.filter = filter;
      this.load();
    }
  }

  onChange(value: any) {
  }

  onTouched() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
