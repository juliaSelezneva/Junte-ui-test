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
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter as filtering, finalize } from 'rxjs/operators';
import { TableFeatures, UI } from '../../enum/ui';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter, SearchFilter } from '../../models/table';
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

  ui = UI;

  private _count: number;
  private subscriptions = new Subscriptions();

  progress = {loading: false};

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  filterForm: FormGroup;
  sort: FormControl;
  page: FormControl;
  offset: FormControl;
  first: FormControl;

  source: any[] = [];

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
  @Input()
  features: TableFeatures[] = [];

  @Input()
  filter: SearchFilter = new DefaultSearchFilter({
    offset: DEFAULT_OFFSET,
    first: DEFAULT_FIRST
  });

  @Input()
  fetcher: Function;

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sort = this.formBuilder.control(null);
    this.first = this.formBuilder.control(DEFAULT_FIRST);
    this.offset = this.formBuilder.control(DEFAULT_OFFSET);
    this.page = this.formBuilder.control(((+this.offset.value / +this.first.value) + 1));
    this.filterForm = this.formBuilder.group({
      orderBy: this.sort,
      q: [''],
      offset: this.offset,
      page: this.page,
      first: this.first
    });

    this.filterForm.valueChanges.pipe(filtering(() => !!this.fetcher), debounceTime(FILTER_DELAY))
      .subscribe(filter => {
        if (filter.first !== this.filter.first) {
          filter.page = 1;
        }
        filter.offset = (filter.page - 1) * filter.first;
        Object.assign(this.filter, filter);
        this.onChange(this.filter);
        this.load();
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  load() {
    this.progress.loading = true;
    this.subscriptions.push('rows', this.fetcher(this.filter)
      .pipe(finalize(() => this.progress.loading = false))
      .subscribe(resp => {
        this.source = resp.results;
        this.count = resp.count;
      }));
  }

  sorting(sort: string) {
    this.filterForm.patchValue({
      orderBy: this.sort.value === sort ? `-${sort}` : sort
    });
  }

  writeValue(value: SearchFilter) {
    if (value !== undefined) {
      this.filterForm.patchValue({first: value.first, offset: value.offset}, {emitEvent: false});
    }
  }

  onChange(value: SearchFilter) {
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
