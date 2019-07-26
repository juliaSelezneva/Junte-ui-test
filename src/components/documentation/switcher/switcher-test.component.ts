import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-switcher-test',
  templateUrl: './switcher-test.component.html',
  styleUrls: ['./switcher-test.component.scss']
})

export class SwitcherTestComponent implements OnInit {

  ui = UI;
  form: FormGroup;

  options = new Array(15);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      selected: {obj: 2}
    });

    this.form.valueChanges.subscribe(f => console.log(f));
  }
}
