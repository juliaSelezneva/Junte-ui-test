import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DEFAULT_FIRST, DEFAULT_OFFSET, TableComponent, UI } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const DEFAULT_DELAY = 1000;
const DEFAULT_SELECT = 4;

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;

  table = new FormControl({offset: DEFAULT_OFFSET, first: DEFAULT_FIRST, select: DEFAULT_SELECT});
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

    this.form.valueChanges.subscribe(form => {
      console.log('table filter changed', form);
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
