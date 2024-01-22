import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../notifications/services/notification.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm?: FormGroup;
  fieldsTouched = {
    login: false,
    password: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this._createForm();
  }

  private _createForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get _login() {
    return this.loginForm?.get('login');
  }

  get _password() {
    return this.loginForm?.get('password');
  }

  submit() {
    const data = this.loginForm?.getRawValue();
    this.authService.login(data);
  }
}
