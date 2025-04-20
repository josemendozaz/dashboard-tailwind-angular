import { CanActivateFn } from '@angular/router';

export const preventLoginGuard: CanActivateFn = (route, state) => {
  return true;
};
