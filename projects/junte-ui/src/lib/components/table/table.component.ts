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
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter as filtering, finalize, map } from 'rxjs/operators';
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
  private filter$ = new BehaviorSubject<any>(new DefaultSearchFilter({
    offset: DEFAULT_OFFSET,
    first: DEFAULT_FIRST
  }));

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

  set filter(filter: any) {
    this.filter$.next(filter);
  }

  get filter() {
    return this.filter$.getValue();
  }

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
    this.form.valueChanges
      .pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(filter => {
        if (filter.first !== this.filter.first) {
          filter.page = 1;
        }
        filter.offset = (filter.page - 1) * filter.first;
        this.filter = {...this.filter, ...filter};
        this.onChange(this.filter);
      });

    this.filter$.pipe(
      filtering(() => !!this.fetcher),
      debounceTime(FILTER_DELAY),
      distinctUntilChanged((val1, val2) => isEqual(val1, val2))
    ).subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  load() {
    if (!!this.fetcher) {
      this.progress.loading = true;
      this.subscriptions.push('rows', this.fetcher(this.filter)
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
      this.form.patchValue({
        first: value.first,
        offset: value.offset,
        page: Math.floor(value.offset / value.first) + 1,
        q: value.q
      });

      this.filter = {...this.filter, ...value};
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
