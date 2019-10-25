import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { UI } from '../../enum/ui';
import { differenceInDays } from 'date-fns';

export enum DatePeriodBases {
  days = 'day(s)'
}

@Component({
  selector: 'jnt-date-period',
  templateUrl: './date-period.encapsulated.html'
})
export class DatePeriodComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-date-period-host';
  ui = UI;

  @Input() base: DatePeriodBases = DatePeriodBases.days;
  @Input() start: Date = new Date();
  @Input() end: Date;
  @Input() current = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
