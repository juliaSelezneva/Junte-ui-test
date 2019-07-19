import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Positions, Schemes} from '../../enum/ui';

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.encapsulated.html'
})
export class BadgeComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-badge-host';

  @Input()
  count: string;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.position')
  @Input()
  position: Positions = Positions.rightTop;

  constructor() {
  }

  ngOnInit() {
  }

}
