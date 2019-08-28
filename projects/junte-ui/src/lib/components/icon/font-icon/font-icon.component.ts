import { Component, HostBinding, Input } from '@angular/core';
import { Icons } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'jnt-font-icon',
  template: '',
  styleUrls: ['./font-icon.component.scss']
})
export class FontIconComponent {

  @Input() icon = Icons.check;
  @Input() @HostBinding('style.font-family')
  iconset = 'icons';

  @HostBinding('class')
  get class() {
    return `icon-${this.icon}`;
  }

}
