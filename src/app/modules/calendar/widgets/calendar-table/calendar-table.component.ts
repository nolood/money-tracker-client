import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss'],
})
export class CalendarTableComponent {
  constructor(
    public calendarService: CalendarService,
    private router: Router,
  ) {}

  navigateToDay(date: DateTime) {
    this.router.navigateByUrl('/calendar/day/' + date.toFormat('yyyy-MM-dd'));
  }
}
