import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { UI } from '../../enum/ui';
import * as moment from 'moment';

@Component({
  selector: 'jnt-date-period',
  templateUrl: './date-period.encapsulated.html'
})
export class DatePeriodComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-date-period-host';
  ui = UI;

  @Input() start: Date;
  @Input() end: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
