import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../shared/modules/user/services/user.service';
import { IUser } from '../../../shared/modules/user/user.interface';
import { NotificationService } from '../../notifications/services/notification.service';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiBaseUrl;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private notificationService: NotificationService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
  ) {}

  private getErrorText = this.errorHandlerService.getErrorText;

  private registrationCompleted(data: { token: string; user: IUser }): void {
    this.userService.setToken(data.token);
    this.userService.setIsAuth(true);
    this.userService.setUser(data.user);
    this.notificationService.add({
      type: 'success',
      message: 'Registration was successful',
    });
    this.router.navigateByUrl('/calendar');
  }

  private loginCompleted(data: { token: string; user: IUser }): void {
    this.userService.setToken(data.token);
    this.userService.setIsAuth(true);
    this.userService.setUser(data.user);
    this.notificationService.add({
      type: 'success',
      message: 'Login was successful',
    });
    this.router.navigateByUrl('/calendar');
  }

  public login(data: { login: string; password: string }): void {
    const url = `${this.baseUrl}/auth/login`;
    this.http
      .post<{ token: string; user: IUser }>(url, data)
      .pipe(catchError(this.errorHandlerService.handleError.bind(this)))
      .subscribe((data) => {
        this.loginCompleted(data);
      });
  }

  public register(data: {
    email: string;
    username: string;
    password: string;
  }): void {
    const url = `${this.baseUrl}/auth/registration`;
    this.http
      .post<{ token: string; user: IUser }>(url, data)
      .pipe(catchError(this.errorHandlerService.handleError.bind(this)))
      .subscribe((data) => {
        this.registrationCompleted(data);
      });
  }
}
