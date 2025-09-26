// src/app/login/login.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from "../services/auth"; // adjust path

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "login-page.html",
  styles: []
})
export class LoginPage {
  private fb = inject(FormBuilder);
  auth = inject(AuthService);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  loading = false;
  error: string | null = null;

  async onGoogleSignIn() {
    try {
      this.loading = true;
      this.error = null;
      const res = await this.auth.googleSignIn();
      localStorage.setItem("INNOTECH_USER_DATA", JSON.stringify(res));
      location.assign('/student');
    } catch (err: any) {
      this.error = err?.message ?? 'Google sign-in failed';
    } finally {
      this.loading = false;
    }
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;
    const { email, password } = this.form.value;

    try {
      // await this.auth.signInWithEmail(email, password, this.form.value.remember);
      // navigation or success handling should be done by AuthService or a router event
    } catch (err: any) {
      // firebase errors often contain codes - you can map codes to friendly messages
      this.error = err?.message ?? 'Sign-in failed';
    } finally {
      this.loading = false;
    }
  }

  async onRegister() {
    // Could open a modal or navigate to register page; for demo we use a simple prompt flow
    const email = prompt('Enter email for registration:');
    const password = prompt('Enter password (min 6 chars):');
    if (!email || !password) return;
    this.loading = true;
    try {
      // await this.auth.registerWithEmail(email, password);
      alert('Account created — you should be logged in now.');
    } catch (err: any) {
      alert(err?.message ?? 'Registration failed');
    } finally {
      this.loading = false;
    }
  }
}
