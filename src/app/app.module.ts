import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NgOptimizedImage } from '@angular/common';
import { AuthLayoutComponent } from './modules/auth/layouts/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterModule.forRoot([
      { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    ]),
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
