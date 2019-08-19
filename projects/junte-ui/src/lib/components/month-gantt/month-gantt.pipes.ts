import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays, getDate, getDaysInMonth, getMonth, getYear } from 'date-fns';
import { GanttRequestStatuses } from '../../enum/ui';

const MONTHS_IN_YEAR = 12;

function getFullMonth(year: number, month: number) {
  return MONTHS_IN_YEAR * year + month;
}

function getDifference(date1: Date, date2: Date, base: string = 'days') {
  switch (base) {
    case 'days':
    default:
      return differenceInDays(date1, date2);

  }
}

export enum VacationRequestLables {
  accepting = 'На согласовании',
  accepted = 'Согласовано',
  declined = 'Отказано',
}

@Pipe({name: 'fullMonth'})
export class FullMonthPipe implements PipeTransform {
  transform(source: Date): number {
    return getFullMonth(getYear(source), getMonth(source));
  }
}

@Pipe({name: 'start'})
export class StartPipe implements PipeTransform {
  transform(from: Date, current: Date): number {
    return getFullMonth(getYear(from), getMonth(from)) >= getFullMonth(getYear(current), getMonth(current))
      ? getDate(from) : 1;
  }
}

@Pipe({name: 'end'})
export class EndPipe implements PipeTransform {
  transform(to: Date, current: Date): number {
    return getFullMonth(getYear(to), getMonth(to)) <= getFullMonth(getYear(current), getMonth(current))
      ? getDate(to) : getDaysInMonth(current);
  }
}

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(status: GanttRequestStatuses): string {
    return VacationRequestLables[status];
  }
}

@Pipe({name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(date1: Date, date2: Date, base: string = 'days'): number {
    return getDifference(date1, date2, base);
  }
}

@Pipe({name: 'diffDays'})
export class DiffDayPipe implements PipeTransform {
  transform(from: Date, to: Date): number {
    return getDifference(from, to);
  }
}

@Pipe({name: 'remnantDays'})
export class RemnantDayPipe implements PipeTransform {
  transform(from: Date, to: Date): number {
    const diff = getDifference(from, to);
    const remnant = getDifference(new Date(), to);
    return Math.min(diff, Math.max(remnant, 0));
  }
}
