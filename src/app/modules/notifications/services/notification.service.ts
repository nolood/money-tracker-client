import { Injectable } from '@angular/core';
import { INotification } from '../widgets/notification/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  data: INotification[] = [];

  remove(id: string) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  add(data: Omit<INotification, 'id'>) {
    const id = crypto.randomUUID();
    this.data.push({ ...data, id: id });

    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }
  constructor() {}
}
