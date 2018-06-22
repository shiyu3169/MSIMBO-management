import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { VideoComponent } from './components/video/video.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { WikiDetailComponent } from './components/wiki-detail/wiki-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitComponent } from './components/visit/visit.component';

import { AuthenticationService } from './services/authentication.service.client';
import { AdminService } from './services/admin.service.client';


const APP_ROUTES : Routes = [
  { path : '', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'students', component : StudentListComponent},
  { path : 'about', component : AboutComponent},
  { path : 'curriculum', component : CurriculumComponent},
  { path : 'visit/:uid', component : VisitComponent},
  { path : 'user', component : ProfileComponent, canActivate: [AuthenticationService]},
  { path : 'video', component : VideoComponent, canActivate: [AuthenticationService]},
  { path : 'assignment', component : AssignmentListComponent, canActivate: [AuthenticationService]},
  { path : 'assignment/:aid', component : AssignmentDetailComponent, canActivate: [AuthenticationService]},
  { path : 'wiki', component : WikiComponent, canActivate: [AuthenticationService]},
  { path : 'wiki/:wid', component : WikiDetailComponent, canActivate: [AuthenticationService]},
  { path : 'register', component : RegisterComponent, canActivate: [AuthenticationService, AdminService]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
