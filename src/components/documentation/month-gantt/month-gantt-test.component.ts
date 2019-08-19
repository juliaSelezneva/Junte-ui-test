import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { REQUESTS } from './requests';

@Component({
  selector: 'app-month-gantt-test',
  templateUrl: './month-gantt-test.component.html',
  styleUrls: ['./month-gantt-test.component.scss']
})
export class MonthGanttTestComponent implements OnInit {

  requests = REQUESTS;
  gantt = new FormControl(new Date());
  form = this.fb.group({
    gantt: this.gantt
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.gantt.valueChanges.subscribe(date => console.log('Date changed: ', date));
  }
}
