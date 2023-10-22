import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  currentDate: DateTime = DateTime.now();
  calendarDates: DateTime[] = [];
  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDates = [];
    const firstDayOfMonth = this.currentDate.startOf('month');
    const startOfWeek = firstDayOfMonth.startOf('week');

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const date = startOfWeek.plus({ days: i * 7 + j });
        this.calendarDates.push(date);
      }
    }
  }

  changeMonth(delta: number) {
    this.currentDate = this.currentDate.plus({ months: delta });
    this.generateCalendar();
  }

  changeYear(delta: number) {
    this.currentDate = this.currentDate.plus({ years: delta });
    this.generateCalendar();
  }

  isToday(date: DateTime): boolean {
    const today = DateTime.now();
    return date.hasSame(today, 'day');
  }

  isWeekend(date: DateTime): boolean {
    const dayOfWeek = date.weekday;
    return dayOfWeek === 6 || dayOfWeek === 7;
  }

  isOtherMonth(date: DateTime): boolean {
    return !date.hasSame(this.currentDate, 'month');
  }

  today() {
    this.currentDate = DateTime.now();
    this.generateCalendar();
  }
}
