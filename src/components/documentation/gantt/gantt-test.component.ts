import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GanttRequestStatuses } from 'junte-ui';
import { REQUESTS } from './requests';

@Component({
  selector: 'app-gantt-test',
  templateUrl: './gantt-test.component.html',
  styleUrls: ['./gantt-test.component.scss']
})
export class GanttTestComponent implements OnInit {

  requests = [];
  statuses = GanttRequestStatuses;
  loading = true;
  gantt = new FormControl(new Date());
  form = this.fb.group({
    gantt: this.gantt
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.requests = REQUESTS;
      this.loading = false;
    }, 3000);
    this.gantt.valueChanges.subscribe(date => console.log('Date changed: ', date));
  }
}
