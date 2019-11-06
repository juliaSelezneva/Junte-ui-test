import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_FIRST, DEFAULT_OFFSET, TableComponent, UI } from 'junte-ui';
import { isEqual } from 'projects/junte-ui/src/lib/utils/equal';
import { Observable, of } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

const DEFAULT_DELAY = 1000;
const DEFAULT_SELECT = 4;

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;

  table = new FormControl();
  select = new FormControl([DEFAULT_SELECT]);

  form = new FormGroup({
    select: this.select,
    table: this.table
  });

  options: any[] = [
    {value: 1, label: 'PFC CSKA Moscow'},
    {value: 2, label: 'FC Real Madrid'},
    {value: 3, label: 'FC Manchester United'}
  ];

  ajaxOptions: any[] = [
    {value: 4, label: 'FC Manchester City'},
    {value: 5, label: 'FC Liverpool'},
    {value: 6, label: 'FC Barcelona'}
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
      const data = {...this.data};
      data.results = data.results.slice(filter.offset, filter.offset + filter.first);
      data.count = this.data.results.length;
      return of(data).pipe(delay(DEFAULT_DELAY));
    };

    this.select.valueChanges.subscribe(value => this.table.patchValue({...this.tableControl.filter, select: value}));
    this.table.valueChanges.subscribe(filter => {
      for (let param in filter) {
        if (filter.hasOwnProperty(param) && filter[param] === null || filter[param] === undefined || filter[param] === '') {
          delete filter[param];
        }
      }
      this.router.navigate([filter], {relativeTo: this.route});
    });

    this.route.params.pipe(distinctUntilChanged((val1, val2) => isEqual(val1, val2)))
      .subscribe(({offset, first, select, q, sort}) => {
      const filter = {offset, first, select, q, sort};
      filter.offset = +offset || DEFAULT_OFFSET;
      filter.first = +first || DEFAULT_FIRST;
      if (!!select) {
        filter.select = +select;
      }
      if (!!q) {
        filter.q = q;
      }
      if (!!sort) {
        filter.sort = sort;
      }
      this.table.patchValue(filter);
    });
  }

  loadOptions() {
    return (): Observable<any> => of(this.ajaxOptions).pipe(delay(DEFAULT_DELAY));
  }

  edit() {
    console.log('edit');
  }

  delete() {
    console.log('delete');
  }
}
