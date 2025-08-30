import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';
import { AuthService } from '../../services/AuthService';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';
  checkingAuth = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) { 

  }

  ngOnInit(): void {

    this.authService.checkAuthStatus().subscribe((isAuth: boolean) => {
      this.checkingAuth = false;
      if (isAuth) {
        this.router.navigate(['/dashboard']);
      }else{
        this.checkingAuth = false;
      }
    });

    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { username, password } = this.form.value;

    this.http.post('http://localhost:8080/api/auth/login', { email: username, password }, { withCredentials: true })
      .subscribe({
        next: () => {
          Toastify({
            text: "Login successful!",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
          }).showToast();

          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = 'Invalid credentials';

          Toastify({
            text: "Invalid credentials",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
          }).showToast();
        }
      });
  }
}
