import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routes 
import{APP_ROUTING} from './routes';

// ngx-socket-io

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };


// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { HumanResorcesComponent } from './components/human-resorces/human-resorces.component';
import { SupervisionComponent } from './components/supervision/supervision.component';
import { SupportComponent } from './components/support/support.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { BlackboardComponent } from './components/blackboard/blackboard.component';
import { StudentComponent } from './components/student/student.component';
import { SchoolComponent } from './components/school/school.component';
import {FormsModule} from '@angular/forms';
//sweet alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//font-awesome


import { environment } from '../environments/environment';

//http module
import {HttpClientModule} from '@angular/common/http';
import { AdminGuard, HumanResorcesGuard, RegisterGuard, SchoolGuard, SettingsGuard, SupervisionGuard, TeachersGuard } from './services/Main.guard';
import { PoliticsComponent } from './components/politics/politics.component';

// virtual scrolling
import {ScrollingModule} from '@angular/cdk/scrolling';
import { UserCardComponent } from './userCard/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SchoolComponent,
    AdministrationComponent,
    HumanResorcesComponent,
    SupervisionComponent,
    SupportComponent,
    TeachersComponent,
    SettingsComponent,
    ChatScreenComponent,
    BlackboardComponent,
    StudentComponent,
    PoliticsComponent,
    UserCardComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    SweetAlert2Module,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    ScrollingModule,

  
    
  ],
  providers: [
    RegisterGuard,
     SchoolGuard,
      HumanResorcesGuard,
      SupervisionGuard,
      AdminGuard,
      TeachersGuard,
      SettingsGuard
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
