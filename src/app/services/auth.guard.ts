import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {

  const localUser = localStorage.getItem('empEmpUser');
  const router = inject(Router);

  if(localUser != null){
    return true;
  } else {
    router.navigateByUrl('/login')
     return false
  }
  
};
