import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InstructorComponent } from './instructor/instructor.component';
import { NewInstructorComponent } from './instructor/new-instructor/new-instructor.component';
import { ProfileComponent } from './profile/profile.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'instructor/new', component: NewInstructorComponent },
  { path: 'profile', component: ProfileComponent }
];