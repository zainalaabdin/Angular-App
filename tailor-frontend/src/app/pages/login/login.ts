import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
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

  // Show loader alert
  Swal.fire({
    title: 'Logging in...',
    text: 'Please wait while we verify your credentials.',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  this.http.post('http://localhost:8080/api/auth/login', { email: username, password }, { withCredentials: true })
    .subscribe({
      next: (res: any) => {
        Swal.close(); // close the loader

        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        Swal.close(); // close the loader

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password',
        });

        console.error('Login failed:', err);
        this.errorMessage = 'Invalid credentials';
      }
    });
}
}

