import { Injectable } from '@angular/core';
import { NotificationService } from '../../modules/notifications/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notificationService: NotificationService) {}

  public getErrorText(code: string) {
    switch (code) {
      case 'user-notfound':
        return 'User not found';
      case 'wrong-password':
        return 'Wrong password';
      case 'email-already-exists':
        return 'Email already in use';
      case 'nickname-already-exists':
        return 'Nickname already in use';
      default:
        return 'Unexpected error';
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
      this.notificationService.add({
        type: 'error',
        message: this.getErrorText(error.error.message),
      });
    } else {
      console.log(this.getErrorText(error.error.message), error.error.message);
      this.notificationService.add({
        type: 'error',
        message: this.getErrorText(error.error.message),
      });
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
