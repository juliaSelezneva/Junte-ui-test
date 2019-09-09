import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'jnt-table-column',
  template: ``
})
export class TableColumnComponent {

  @ContentChild('cellTemplate', {static: false})
  cellTemplate: TemplateRef<any>;

  @Input()
  title: string;

  @Input()
  sort: string;

}
