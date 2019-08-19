import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-month-gantt-line',
  template: ''
})
export class MonthGanttLineComponent {

  @Input() title: string;
  @Input() from: Date;
  @Input() to: Date;
  @Input() period: any;
  @ContentChild('period') periodTemplate: TemplateRef<any>;
}
