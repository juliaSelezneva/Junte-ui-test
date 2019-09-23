import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-date-picker-test',
  templateUrl: './date-picker-test.component.html',
  styleUrls: ['./date-picker-test.component.scss']
})
export class DatePickerTestComponent implements OnInit {

  ui = UI;
  date: Date = new Date;
  datePicker = new FormControl(new Date);
  form = this.fb.group({
    datePicker: this.datePicker
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.datePicker.valueChanges.subscribe(date => this.date = date);
  }

}
