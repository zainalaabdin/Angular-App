import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '../services/LoadingService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loadingService: LoadingService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
     this.loadingService.show();
    try {
      const res = await fetch('http://localhost:8080/api/auth/check', { credentials: 'include' });
      const data = await res.json();
      const isAuth = data.authenticated === true;

      const targetUrl = state.url;
      if (isAuth) {
                if (targetUrl === '/login' || targetUrl === '/') {
          this.router.navigate(['/dashboard']);
          return false;
        }
        return true;
      } else {
        if (targetUrl === '/login' || targetUrl === '/') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    } catch (err) {
      this.router.navigate(['/login']);
      return false;
    } finally {
    this.loadingService.hide();
  }
    
  }
}
