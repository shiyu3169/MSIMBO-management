import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Routing } from './app.routing'

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { VideoComponent } from './components/video/video.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    CurriculumComponent,
    VideoComponent,
    StudentListComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
