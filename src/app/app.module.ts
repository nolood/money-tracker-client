import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {AuthModule} from "./modules/auth/auth.module";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
