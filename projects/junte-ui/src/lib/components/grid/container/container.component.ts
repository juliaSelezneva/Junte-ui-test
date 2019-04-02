import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-container',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class ContainerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-container-host';

  @HostBinding('attr.fluid')
  @Input() fluid = false;

}
