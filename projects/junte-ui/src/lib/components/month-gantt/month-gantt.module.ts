import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from '../skeleton';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { DatePipeModule } from '../../pipes/date-pipe.module';
import { CardModule } from '../card';
import { IconModule } from '../icon';
import { MonthGanttLineComponent } from './month-gantt-line/month-gantt-line.component';
import { MonthGanttComponent } from './month-gantt.component';
import { DateDiffPipe, DiffDayPipe, EndPipe, FullMonthPipe, RemnantDayPipe, StartPipe, StatusPipe } from './month-gantt.pipes';

@NgModule({
  declarations: [
    MonthGanttComponent,
    FullMonthPipe,
    StartPipe,
    EndPipe,
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
