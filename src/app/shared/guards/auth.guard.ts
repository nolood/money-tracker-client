import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../modules/user/services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const isAuth = inject(UserService)._isAuth();
  if (!isAuth) {
    inject(Router).navigateByUrl('/auth/login');
  }
  return isAuth;
};
