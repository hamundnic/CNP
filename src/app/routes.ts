import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SchoolComponent } from './components/school/school.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { HumanResorcesComponent } from './components/human-resorces/human-resorces.component';
import { SupervisionComponent } from './components/supervision/supervision.component';
import { SupportComponent } from './components/support/support.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterGuard, SchoolGuard, HumanResorcesGuard, SupervisionGuard, AdminGuard, TeachersGuard, SettingsGuard } from './services/Main.guard';
import { PoliticsComponent } from './components/politics/politics.component';


const school = AdminGuard || HumanResorcesGuard || SupervisionGuard || SchoolGuard;
const register = AdminGuard || HumanResorcesGuard || RegisterGuard;
const support = AdminGuard || SchoolGuard || HumanResorcesGuard || SupervisionGuard || TeachersGuard;
const humanR = AdminGuard || HumanResorcesGuard;
const sVision = AdminGuard || HumanResorcesGuard || SupervisionGuard || TeachersGuard;
const teacher = AdminGuard || HumanResorcesGuard || SupervisionGuard || TeachersGuard;
const setting = AdminGuard || SchoolGuard || HumanResorcesGuard || SupervisionGuard || TeachersGuard || SettingsGuard;

const APP_ROUTES:Routes=[
    
    
    {path:'home', component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'login',component: LoginComponent},
    {path:'admin',component: AdministrationComponent, canActivate: [AdminGuard]},
    {path:'register',component: RegisterComponent, data: [`${register}`] , children:[{path: 'politics', component: PoliticsComponent}], },
    {path:'school',component: SchoolComponent, data: [`${school}`] },
    {path:'hhrr',component: HumanResorcesComponent,data: [`${humanR}`]},
    {path:'svision',component: SupervisionComponent, data: [`${sVision}`]},
    {path:'support',component: SupportComponent, data: [`${support}`]},
    {path:'teacher',component: TeachersComponent,data: [`${teacher}`]},
    {path:'settings',component: SettingsComponent,data: [`${setting}`]},
    {path:'**',redirectTo:'home'},
    {path: '',pathMatch:'full',redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);