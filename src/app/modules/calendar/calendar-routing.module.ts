import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDayComponent } from './pages/calendar-day/calendar-day.component';

const calendarRoutes: Routes = [
  { path: 'calendar', redirectTo: 'calendar/main', pathMatch: 'full' },
  {
    path: 'calendar',
    component: MainLayoutComponent,
    children: [
      {
        path: 'view',
        component: CalendarComponent,
        title: 'TM | Calendar',
      },
      {
        path: 'day',
        component: CalendarDayComponent,
        title: 'TM | Day',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(calendarRoutes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
