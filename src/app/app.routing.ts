import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { VideoComponent } from './components/video/video.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'user/:uid', component : ProfileComponent},
  { path : 'curriculum', component : CurriculumComponent},
  { path : 'video', component : VideoComponent},
  { path : 'students', component : StudentListComponent},
  { path : 'about', component : AboutComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
