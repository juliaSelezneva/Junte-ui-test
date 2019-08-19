import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { CardModule } from '../card';
import { IconModule } from '../icon';
import { SkeletonModule } from '../skeleton';
import { MonthGanttLineComponent } from './month-gantt-line/month-gantt-line.component';
import { MonthGanttComponent } from './month-gantt.component';
import { AfterPipe, BeforePipe, DateDiffPipe, DiffDayPipe, FullMonthPipe, RemnantDayPipe, StatusPipe } from './month-gantt.pipes';

@NgModule({
  declarations: [
    MonthGanttComponent,
    FullMonthPipe,
    BeforePipe,
    AfterPipe,
    StatusPipe,
    DiffDayPipe,
    RemnantDayPipe,
    DateDiffPipe,
    MonthGanttLineComponent
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    ArrayPipeModule,
    CardModule,
    IconModule,
    SkeletonModule
  ],
  exports: [
    MonthGanttComponent,
    MonthGanttLineComponent
  ]
})
export class MonthGanttModule {
}
