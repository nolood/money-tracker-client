import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../notifications/services/notification.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  form?: FormGroup;
  fieldsTouched = {
    email: false,
    username: false,
    password: false,
    repeatPassword: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
    this._createForm();
  }

  private _createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  get _username() {
    return this.form?.get('username');
  }

  get _email() {
    return this.form?.get('email');
  }

  get _repeatPassword() {
    return this.form?.get('repeatPassword');
  }

  get _password() {
    return this.form?.get('password');
  }

  submit() {
    console.log(this.form?.getRawValue());
  }

  sendNotification() {
    this.notificationService.add({
      type: 'error',
      message: 'Error',
    });
  }
}
