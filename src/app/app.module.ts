import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing'

// Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { VideoComponent } from './components/video/video.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { WikiDetailComponent } from './components/wiki-detail/wiki-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitComponent } from './components/visit/visit.component';

// Services
import { UserService } from './services/user.service.client';
import { AssignmentService } from './services/assignment.service.client';
import { WikiService } from './services/wiki.service.client';
import { GradeService} from './services/grade.service.client';
import { SharedService } from './services/shared.service.client';
import { AuthenticationService } from './services/authentication.service.client';
import { AdminService } from './services/admin.service.client';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    CurriculumComponent,
    VideoComponent,
    StudentListComponent,
    LoginComponent,
    AboutComponent,
    AssignmentListComponent,
    AssignmentDetailComponent,
    FooterComponent,
    NavbarComponent,
    WikiComponent,
    WikiDetailComponent,
    RegisterComponent,
    VisitComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService, 
    AssignmentService, 
    WikiService, 
    GradeService,
    SharedService, 
    AuthenticationService, 
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
