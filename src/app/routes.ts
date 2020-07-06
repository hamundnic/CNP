import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SchoolComponent } from './components/school/school.component';

const APP_ROUTES:Routes=[
    {path:'home', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'school',component: SchoolComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);