import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-filters',
  templateUrl: './calendar-filters.component.html',
  styleUrls: ['./calendar-filters.component.scss'],
})
export class CalendarFiltersComponent {
  constructor(public calendarService: CalendarService) {}
}
