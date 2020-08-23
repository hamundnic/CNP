"use strict";
exports.__esModule = true;
exports.APP_ROUTING = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var contact_component_1 = require("./components/contact/contact.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var school_component_1 = require("./components/school/school.component");
var administration_component_1 = require("./components/administration/administration.component");
var human_resorces_component_1 = require("./components/human-resorces/human-resorces.component");
var supervision_component_1 = require("./components/supervision/supervision.component");
var support_component_1 = require("./components/support/support.component");
var teachers_component_1 = require("./components/teachers/teachers.component");
var settings_component_1 = require("./components/settings/settings.component");
var Main_guard_1 = require("./services/Main.guard");
var politics_component_1 = require("./components/politics/politics.component");
var school = Main_guard_1.AdminGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.SupervisionGuard || Main_guard_1.SchoolGuard;
var register = Main_guard_1.AdminGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.RegisterGuard;
var support = Main_guard_1.AdminGuard || Main_guard_1.SchoolGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.SupervisionGuard || Main_guard_1.TeachersGuard;
var humanR = Main_guard_1.AdminGuard || Main_guard_1.HumanResorcesGuard;
var sVision = Main_guard_1.AdminGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.SupervisionGuard || Main_guard_1.TeachersGuard;
var teacher = Main_guard_1.AdminGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.SupervisionGuard || Main_guard_1.TeachersGuard;
var setting = Main_guard_1.AdminGuard || Main_guard_1.SchoolGuard || Main_guard_1.HumanResorcesGuard || Main_guard_1.SupervisionGuard || Main_guard_1.TeachersGuard || Main_guard_1.SettingsGuard;
var APP_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: administration_component_1.AdministrationComponent, canActivate: [Main_guard_1.AdminGuard] },
    { path: 'register', component: register_component_1.RegisterComponent, data: ["" + register], children: [{ path: 'politics', component: politics_component_1.PoliticsComponent }] },
    { path: 'school', component: school_component_1.SchoolComponent, data: ["" + school] },
    { path: 'hhrr', component: human_resorces_component_1.HumanResorcesComponent, data: ["" + humanR] },
    { path: 'svision', component: supervision_component_1.SupervisionComponent, data: ["" + sVision] },
    { path: 'support', component: support_component_1.SupportComponent, data: ["" + support] },
    { path: 'teacher', component: teachers_component_1.TeachersComponent, data: ["" + teacher] },
    { path: 'settings', component: settings_component_1.SettingsComponent, data: ["" + setting] },
    { path: '**', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
