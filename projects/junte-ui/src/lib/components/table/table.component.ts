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
import { DEFAULT_FIRST, DEFAULT_OFFSET } from '../../models/table';
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

  form = this.builder.group({
    q: [''],
    sort: this.sort,
    page: this.page,
    offset: this.offset,
    first: this.first
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
    return Math.ceil(this.count / this.form.get('first').value);
  }

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.first.valueChanges.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(() => this.page.patchValue(1, {emitEvent: false}));

    // this.page.valueChanges.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
    //   .subscribe(page => this.offset.patchValue((page - 1) * this.first.value));

    this.form.valueChanges.pipe(
      debounceTime(FILTER_DELAY),
      filtering(() => !!this.fetcher),
      distinctUntilChanged((val1, val2) => isEqual(val1, val2))
    ).subscribe(filter => {
      console.log('onChange', filter);
      filter.offset = (filter.page - 1) * filter.first;
      this.offset.patchValue((filter.page - 1) * this.first.value, {emitEvent: false});
      this.onChange(filter);
      this.load(filter);
    });

    this.load();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  clear(filter) {
    for (let param in filter) {
      if (filter.hasOwnProperty(param) && (filter[param] === null
        || filter[param] === undefined || filter[param] === '')) {
        delete filter[param];
      }
    }
    return filter;
  }

  load(filter = this.form.getRawValue()) {
    if (!!this.fetcher) {
      this.progress.loading = true;
      console.log('load:', this.clear(filter));
      this.subscriptions.push('rows', this.fetcher(this.clear(filter))
        .pipe(finalize(() => this.progress.loading = false))
        .subscribe(resp => {
          this.source = resp.results;
          this.count = resp.count;
        }));
    }
  }

  sorting(sort: string) {
    this.form.patchValue({orderBy: this.sort.value === sort ? `-${sort}` : sort});
  }

  writeValue(value: any) {
    if (!!value) {
      const filter = {...this.form.getRawValue(), ...value};
      filter.page = Math.floor(filter.offset / filter.first) + 1;
      if (!isEqual(filter, this.form.getRawValue())) {
        console.group('writeValue');
        console.log('form:', this.form.getRawValue());
        console.log('filter:', filter);
        console.groupEnd();

        for (let key in filter) {
          if (filter.hasOwnProperty(key) && !this.form.get(key)) {
            this.form.addControl(key, new FormControl(filter[key]));
          }
        }
        this.form.patchValue(filter, {emitEvent: false});
      }
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
