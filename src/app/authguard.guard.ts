import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.user.getUserLoggedIn()) {
          return this.user.getUserLoggedIn();
      } else {
        this.router.navigate(['/']);
      }
  }
}
