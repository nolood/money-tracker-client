import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../modules/user/services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(UserService)._isAuth()) {
    return true;
  }
  inject(Router).navigateByUrl('/auth/login');
  return false;
};
