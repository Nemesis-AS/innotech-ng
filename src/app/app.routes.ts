import { Routes } from '@angular/router';

import { LandingPage } from './landing-page/landing-page';
import { LoginPage } from './login-page/login-page';
import { StudentForm } from './student-form/student-form';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: "student",
    component: StudentForm
  }
];
