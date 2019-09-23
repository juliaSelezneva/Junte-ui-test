import { ElementRef, Injectable } from '@angular/core';
import { PopoverComponent, PopoverOptions } from './popover.component';

@Injectable({providedIn: 'root'})
export class PopoverService {

  private popover: PopoverComponent;

  constructor() {
    console.log('init popover');
  }

  register(popover: PopoverComponent): void {
    this.popover = popover;
  }

  show(target: ElementRef, options: PopoverOptions): PopoverComponent {
    this.popover.show(target, options);
    return this.popover;
  }

  hide(): void {
    console.log('hide');
    console.log(this.popover);
    if (!!this.popover) {
      this.popover.hide();
    }
  }
}
