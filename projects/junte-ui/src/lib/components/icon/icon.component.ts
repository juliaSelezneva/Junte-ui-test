import { Component, Input } from '@angular/core';
import { Icons, TypeIcon } from '../../enum/ui';

const DEFAULT_ICONSET = 'icons';

@Component({
  selector: 'jnt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  private _icon: string = Icons.check;
  typeIcon = TypeIcon;
  type: TypeIcon = TypeIcon.font;
  iconset: string;

  @Input()
  set icon(icon: string) {
    const chunks = icon.split(':');
    this._icon = chunks[0];

    if (!!chunks[1]) {
      this.type = TypeIcon[chunks[1]];
    }

    if (!!chunks[2]) {
      this.iconset = chunks[2];
    } else if (this.type === TypeIcon.font) {
      this.iconset = DEFAULT_ICONSET;
    }
  }

  get icon() {
    return this._icon;
  }

}
