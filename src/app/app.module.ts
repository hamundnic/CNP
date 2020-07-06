import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routes 
import{APP_ROUTING} from './routes';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//sweet alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SchoolComponent } from './components/school/school.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    SweetAlert2Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
