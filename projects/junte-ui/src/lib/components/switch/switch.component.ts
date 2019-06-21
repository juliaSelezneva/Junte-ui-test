import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Sizes, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-switch',
  templateUrl: './encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {

  @HostBinding('attr.host') readonly host = 'jnt-switch-host';

  ui = UI;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  checked = false;

  @HostBinding('attr.label')
  @Input()
  label: string;

  @HostBinding('attr.size')
  @Input()
  size: Sizes = Sizes.normal;

  onChange = (val: any) => {
  };

  onTouched = () => {
  };

  writeValue(value) {
    this.checked = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}