import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';
import moment = require('moment');

@Component({
  selector: 'app-date-period-test',
  templateUrl: './date-period-test.component.html',
  styleUrls: ['./date-period-test.component.scss']
})
export class DatePeriodTestComponent implements OnInit {

  ui = UI;

  start = moment(2019, 11, 9);
  end = moment(2019, 11, 20);

  constructor() {
  }

  ngOnInit() {
  }

}
