import { Routes } from '@angular/router';

import { LandingPage } from './landing-page/landing-page';
import { LoginPage } from './login-page/login-page';
import { StudentForm } from './student-form/student-form';
import { TeamPage } from './team-page/team-page';
import { TeamPofilePage } from './team-pofile-page/team-pofile-page';

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
    path: 'student',
    component: StudentForm,
  },
  {
    path: 'team',
    component: TeamPage,
  },
  {
    path: 'view-team',
    component: TeamPofilePage
  }
];
