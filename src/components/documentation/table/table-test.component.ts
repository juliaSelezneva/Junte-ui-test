import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_FIRST, DEFAULT_OFFSET, DefaultSearchFilter, TableComponent, UI, isEqual } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

const DEFAULT_DELAY = 1000;

class Filter extends DefaultSearchFilter {
  select?: number;
  user?: number;

  constructor(defs: Filter = null) {
    super(defs);
  }
}

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;

  table = new FormControl();
  select = new FormControl();
  user = new FormControl();

  form = new FormGroup({
    user: this.user,
    select: this.select,
    table: this.table
  });

  options: any[] = [
    {value: 1, label: 'PFC CSKA Moscow'},
    {value: 2, label: 'FC Real Madrid'},
    {value: 3, label: 'FC Manchester United'}
  ];

  ajaxOptions: any[] = [
    {value: 4, label: 'Test 4'},
    {value: 5, label: 'Test 5'},
    {value: 6, label: 'Test 6'}
  ];

  ajaxUserOptions: any[] = [
    {value: 1, label: 'User 1'},
    {value: 2, label: 'User 2'},
    {value: 3, label: 'User 3'}
  ];

  @ViewChild('table', {static: true})
  tableControl: TableComponent;

  data: any = {
    results: [],
    count: 0
  };

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    for (let i = 0; i < Math.random() * (300 - 50) + 50; i++) {
      this.data.results.push({value: `Value ${i}`, label: `Label ${i}`});
    }

    this.tableControl.fetcher = (filter): Observable<any> => {
      console.log('load:', {...filter, user: this.user.value, select: this.select.value});
      const data = {...this.data};
      data.results = data.results.slice(filter.offset, filter.offset + filter.first);
      data.count = this.data.results.length;
      return of(data).pipe(delay(DEFAULT_DELAY));
    };

    this.form.valueChanges.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(() => this.navigate());

    this.route.params.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(({offset, first, select, user, q}) => this.load({offset, first, select, user, q}));
  }

  load({offset, first, select, user, q}) {
    const filter = new DefaultSearchFilter();
    filter.offset = +offset || DEFAULT_OFFSET;
    filter.first = +first || DEFAULT_FIRST;
    if (!!q) {
      filter.q = q;
    }

    if (!!select) {
      this.select.patchValue(+select, {emitEvent: false});
    }
    if (!!user) {
      this.user.patchValue(+user, {emitEvent: false});
    }
    this.table.patchValue(filter);
    this.tableControl.load(filter);
  }

  navigate() {
    const filter = new Filter();
    filter.offset = +this.table.value.offset || DEFAULT_OFFSET;
    filter.first = +this.table.value.first || DEFAULT_FIRST;
    if (!!this.table.value.q) {
      filter.q = this.table.value.q;
    }
    if (!!this.select.value) {
      filter.select = this.select.value;
    }
    if (!!this.user.value) {
      filter.user = this.user.value;
    }
    this.router.navigate([filter], {relativeTo: this.route});
  }

  loadOptions() {
    return (): Observable<any> => of(this.ajaxOptions).pipe(delay(DEFAULT_DELAY));
  }

  loadUserOptions() {
    return (): Observable<any> => of(this.ajaxUserOptions).pipe(delay(DEFAULT_DELAY));
  }

  edit() {
    console.log('edit');
  }

  delete() {
    console.log('delete');
  }
}
