import { Component, Input } from '@angular/core';
import { INotification } from './notification.interface';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() item?: INotification;

  constructor(public notificationService: NotificationService) {}

  deleteNotification() {
    this.notificationService.remove(String(this.item?.id));
  }
}
