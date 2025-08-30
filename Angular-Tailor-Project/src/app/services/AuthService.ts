import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
  }

  checkAuthStatus(): Observable<boolean> {
    return from(
      fetch('http://localhost:8080/api/auth/check', { credentials: 'include' })
        .then(res => res.json())
    ).pipe(
      map((data: any) => data.authenticated === true),
      catchError(() => of(false)) 
    );
  }
}
