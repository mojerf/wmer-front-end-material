import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification = new Subject<string>();
  notification$ = this.notification.asObservable();

  setNotification(message: string, isSuccess: boolean) {
    if (isSuccess) {
      this.notification.next(message);
    } else {
      this.notification.error(message);
    }
  }
}
