import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      const res = await fetch('http://localhost:8080/api/auth/check', { credentials: 'include' });
      const data = await res.json(); // data = { authenticated: true/false, user?: string }
      const isAuth = data.authenticated === true;

      const targetUrl = state.url;

      if (isAuth) {
        // User is logged in
        if (targetUrl === '/login' || targetUrl === '/') {
          // Redirect logged-in user away from login page
          this.router.navigate(['/dashboard']);
          return false;
        }
        // Allow access to protected routes
        return true;
      } else {
        // User not logged in
        if (targetUrl === '/login' || targetUrl === '/') {
          // Allow access to login page
          return true;
        } else {
          // Block protected routes → redirect to login
          this.router.navigate(['/login']);
          return false;
        }
      }
    } catch (err) {
      // On error, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
