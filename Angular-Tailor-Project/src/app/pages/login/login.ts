import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';   // ✅ make sure this exists

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],  // ✅ matches HTML
      password: ['', [Validators.required]],  // ✅ matches HTML
      remember: [false]                       // ✅ matches HTML
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
