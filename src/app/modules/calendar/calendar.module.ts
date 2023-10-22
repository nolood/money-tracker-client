import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarDayComponent } from './pages/calendar-day/calendar-day.component';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { RouterOutlet } from '@angular/router';
import { CalendarRoutingModule } from './calendar-routing.module';
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [CalendarComponent, CalendarDayComponent, MainLayoutComponent],
  imports: [CommonModule, RouterOutlet, CalendarRoutingModule, CoreModule],
})
export class CalendarModule {}
