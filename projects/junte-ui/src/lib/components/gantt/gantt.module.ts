import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { CardModule } from '../card/card.module';
import { IconModule } from '../icon/icon.module';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';
import {
  AfterPipe,
  BeforePipe,
  DateDiffPipe,
  DiffDayPipe,
  FullMonthPipe,
  GetDaysInMonthPipe,
  RemnantDayPipe,
  SamePipe,
  StatusPipe
} from './gantt.pipes';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    GetDaysInMonthPipe,
    SamePipe
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    ArrayPipeModule,
    CardModule,
    IconModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    GetDaysInMonthPipe,
    SamePipe
  ]
})
export class GanttModule {
}
