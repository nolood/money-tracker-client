import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  protected readonly console = console;
}
