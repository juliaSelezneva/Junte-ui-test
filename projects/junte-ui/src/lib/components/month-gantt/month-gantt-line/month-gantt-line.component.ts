import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-month-gantt-line',
  template: ''
})
export class MonthGanttLineComponent {

  @Input() title: string;
  @Input() data: any;
  @Input() template: TemplateRef<any>;
}
