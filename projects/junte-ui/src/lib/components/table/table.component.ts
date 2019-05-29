import {
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { filter as filtering, finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TableColumnComponent } from './column/table-column.component';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, DefaultSearchFilter, Order, SearchFilter } from '../../models/table';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-table',
  templateUrl: './encapsulated.html'
})
export class TableComponent implements OnInit, OnDestroy {

  ui = UI;

  private subscriptions = new Subscription();
  private _count: number;

  progress = {loading: false};

  @HostBinding('attr.host') readonly host = 'jnt-table-host';

  filterForm: FormGroup;
  sort: FormControl;
  order: FormControl;

  source: any[] = [];

  @ContentChildren(TableColumnComponent)
  columns: QueryList<TableColumnComponent>;

  @ContentChild('rowTemplate')
  rowTemplate: TemplateRef<any>;

  @ContentChild('actions')
  actionsTemplate: TemplateRef<any>;

  @ContentChild('filters')
  filtersTemplate: TemplateRef<any>;

  @HostBinding('attr.search')
  @Input()
  search = false;

  @Input()
  filter: SearchFilter = new DefaultSearchFilter({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE
  });

  @Input()
  fetcher: Function;

  set count(count: number) {
    this._count = count;
  }

  get count() {
    return this._count;
  }

  get pagesCount() {
    return Math.ceil(this.count / this.filterForm.get('pageSize').value);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sort = this.formBuilder.control(null);
    this.order = this.formBuilder.control(Order.asc);
    this.filterForm = this.formBuilder.group({
      sort: this.sort,
      order: this.order,
      page: [DEFAULT_PAGE],
      pageSize: [DEFAULT_PAGE_SIZE]
    });

    this.filterForm.valueChanges.pipe((filtering(() => !!this.fetcher)))
      .subscribe(filter => {
        console.log(filter);
        Object.assign(this.filter, filter);
        this.load();
      });
  }

  load() {
    this.progress.loading = true;
    this.fetcher(this.filter)
      .pipe(finalize(() => this.progress.loading = false))
      .subscribe(resp => {
        this.source = resp.results;
        this.count = resp.count;
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sorting(sort: string) {
    this.filterForm.patchValue(this.sort.value !== sort ?
      {sort: sort, order: Order.asc}
      : {order: this.order.value === Order.asc ? Order.desc : Order.asc});
  }
}
