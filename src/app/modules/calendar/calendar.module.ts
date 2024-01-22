import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDayComponent } from './pages/calendar-day/calendar-day.component';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { RouterOutlet } from '@angular/router';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CoreModule } from '../../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { CalendarControlsComponent } from './widgets/calendar-controls/calendar-controls.component';
import { CalendarTableComponent } from './widgets/calendar-table/calendar-table.component';
import { CalendarFiltersComponent } from './widgets/calendar-filters/calendar-filters.component';

@NgModule({
  declarations: [CalendarComponent, CalendarDayComponent, MainLayoutComponent, CalendarControlsComponent, CalendarTableComponent, CalendarFiltersComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    CalendarRoutingModule,
    CoreModule,
    MatIconModule,
  ],
})
export class CalendarModule {}
