import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDayComponent } from './pages/calendar-day/calendar-day.component';
import { authGuard } from '../../shared/guards/auth.guard';

const calendarRoutes: Routes = [
  {
    path: 'calendar',
    redirectTo: 'calendar/view',
    pathMatch: 'full',
  },
  {
    path: 'calendar/day',
    redirectTo: 'calendar/view',
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    component: MainLayoutComponent,
    children: [
      {
        path: 'view',
        component: CalendarComponent,
        title: 'TM | Calendar',
        canActivate: [authGuard],
      },
      {
        path: 'day/:date',
        component: CalendarDayComponent,
        title: 'TM | Day',
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(calendarRoutes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
