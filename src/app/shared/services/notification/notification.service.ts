import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../../models/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification = new Subject<Notification>();
  notification$ = this.notification.asObservable();

  setNotification(message: string, isSuccess: boolean) {
    const notification = {
      message: message,
      isSuccess: isSuccess,
    };
    this.notification.next(notification);
  }
}
