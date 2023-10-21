import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './widgets/notification/notification.component';
import { NotificationsListComponent } from './widgets/notifications-list/notifications-list.component';

@NgModule({
  declarations: [NotificationComponent, NotificationsListComponent],
  exports: [NotificationsListComponent],
  imports: [CommonModule],
})
export class NotificationsModule {}
