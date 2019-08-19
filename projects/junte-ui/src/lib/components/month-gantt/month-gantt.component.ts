import { Component, ContentChildren, forwardRef, HostBinding, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, format, getDaysInMonth, getMonth, isEqual, isSameMonth, isSameYear, subMonths, getDay, getDate } from 'date-fns';
import { GanttRequestStatuses, UI } from '../../enum/ui';
import { today } from '../calendar/utils';
import { MonthGanttLineComponent } from './month-gantt-line/month-gantt-line.component';

@Component({
  selector: 'jnt-month-gantt',
  templateUrl: './month-gantt.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthGanttComponent),
      multi: true
    }
  ]
})
export class MonthGanttComponent implements ControlValueAccessor {

  private _current: Date;

  @HostBinding('attr.host') readonly host = 'jnt-month-gantt-host';

  ui = UI;
  loading = false;
  today = (today());
  progress: any = {};
  error: Error;

  format = format;
  addMonths = addMonths;
  subMonths = subMonths;
  isEqual = isEqual;
  isSameMonth = isSameMonth;
  getDate = getDate;
  getDaysInMonth = getDaysInMonth;

  @ContentChildren(MonthGanttLineComponent)
  lines: QueryList<MonthGanttLineComponent>;

  get current() {
    return this._current;
  }

  set current(current: Date) {
    this._current = current;
    this.onChange(current);
  }

  writeValue(date: Date): void {
    this._current = date;
  }

  onChange(date: Date) {
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
  }
}
