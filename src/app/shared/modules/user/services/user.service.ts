import { Injectable } from '@angular/core';
import { IUser } from '../user.interface';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAuth: boolean = false;
  private user: IUser | null = null;
  private baseUrl = environment.apiBaseUrl;

  public _isAuth(): boolean {
    return this.isAuth;
  }

  public setIsAuth(value: boolean) {
    this.isAuth = value;
  }
  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) {
      this.setIsAuth(false);
    }
    return token;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public setUser(data: IUser): void {
    this.user = data;
  }

  public getSelf(): void {
    const token = this.getToken();
    if (token) {
      const url = `${this.baseUrl}/users/self`;
      this.http.get<IUser>(url).subscribe((data) => {
        this.setUser(data);
        this.setIsAuth(true);
        console.log(data);
      });
    }
  }
}
