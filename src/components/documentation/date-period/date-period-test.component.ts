import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-period-test',
  templateUrl: './date-period-test.component.html',
  styleUrls: ['./date-period-test.component.scss']
})
export class DatePeriodTestComponent implements OnInit {

  ui = UI;

  demo = [
    {start: new Date(2019, 9, 9), end: new Date(2019, 9, 30), current: new Date(2019, 9, 15)},
    {start: new Date(2019, 9, 9), end: new Date(2019, 9, 30)},
    {start: new Date(2019, 9, 30), end: new Date(2019, 9, 9)},
    {end: new Date(2019, 9, 9)},
    {end: new Date(2019, 9, 9), current: new Date(2019, 9, 15)},
    {start: new Date(2019, 9, 9), current: new Date(2019, 9, 15)},
    {},
  ];

  start: Date = this.demo[0]['start'];
  end: Date = this.demo[0]['end'];
  current: Date = this.demo[0]['current'];

  startTest = new FormControl(this.start);
  endTest = new FormControl(this.end);
  currentTest = new FormControl(this.current);


  form = this.fb.group({
    start: this.startTest,
    end: this.endTest,
    current: this.currentTest
  });


  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.startTest.valueChanges.subscribe(start => this.start = start);
    this.endTest.valueChanges.subscribe(end => this.end = end);
    this.currentTest.valueChanges.subscribe(current => this.current = current);
  }

}
