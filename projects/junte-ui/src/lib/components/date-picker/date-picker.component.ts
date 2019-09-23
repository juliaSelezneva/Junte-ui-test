import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format } from 'date-fns';
import { PopoverService } from 'projects/junte-ui/src/lib/components/popover/popover.service';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-date-picker',
  templateUrl: './date-picker.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-date-picker-host';

  ui = UI;
  input = new FormControl();
  calendar = new FormControl(new Date);
  form = this.fb.group({
    input: this.input,
    calendar: this.calendar
  });

  @Input() placeholder: string;
  @Input() format: string = 'DD.MM.YYYY';

  constructor(private fb: FormBuilder,
              private popoverService: PopoverService) {
  }

  ngOnInit() {
    this.calendar.valueChanges.subscribe(date => {
      this.input.patchValue(format(date, this.format));
      this.onChange(date);
      this.popoverService.hide();
    });
  }

  onChange = (val: any) => {
  };

  onTouched = () => {
  };

  writeValue(value: Date) {
    this.calendar.patchValue(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
