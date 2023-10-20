import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module'; // Импортируйте AuthRoutingModule
import { AuthService } from './services/auth.service';
import { UiModule } from '../../shared/ui/ui.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginFormComponent } from './widgets/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
  ],
  exports: [],
  providers: [AuthService],
  imports: [
    AuthRoutingModule,
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
