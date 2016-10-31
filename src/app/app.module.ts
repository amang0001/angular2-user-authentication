import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabsModule, AlertModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './auth/auth.service';
import { InstructorService } from './instructor/instructor.service';
import { InstructorComponent } from './instructor/instructor.component';
import { ProfileComponent } from './profile/profile.component';
import { NewInstructorComponent } from './instructor/new-instructor/new-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InstructorComponent,
    ProfileComponent,
    NewInstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    TabsModule,
    AlertModule,
    ModalModule
  ],
  providers: [
    AuthService,
    provideAuth({
      tokenGetter: () => { return localStorage.getItem('token') }
    }),
    InstructorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
