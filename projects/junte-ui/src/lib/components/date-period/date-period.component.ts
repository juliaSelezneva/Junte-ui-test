import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-date-period',
  templateUrl: './date-period.encapsulated.html'
})
export class DatePeriodComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-date-period-host';

  constructor() { }

  ngOnInit() {
  }

}
