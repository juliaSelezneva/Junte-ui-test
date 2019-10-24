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

  start = new Date(2019, 11, 9);
  end = new Date(2019, 11, 20);
  current = new Date(2019, 11, 15);

  startTest = new FormControl(new Date());
  endTest = new FormControl(new Date());


  form = this.fb.group({
    start: this.startTest,
    end: this.endTest
  });


  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.startTest.valueChanges.subscribe(start => this.startTest = start);
    this.endTest.valueChanges.subscribe(end => this.endTest = end);
  }

}
