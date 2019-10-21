import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePeriodComponent } from './date-period.component';
import { StackModule } from '../stack/stack.module';


@NgModule({
  declarations: [
    DatePeriodComponent
  ],
  imports: [
    CommonModule,
    StackModule
  ],
  exports: [
    DatePeriodComponent
  ]
})
export class DatePeriodModule {
}
