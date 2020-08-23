"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
// Routes 
var routes_1 = require("./routes");
// ngx-socket-io
var ngx_socket_io_1 = require("ngx-socket-io");
var config = { url: environment_1.environment.wsUrl, options: {} };
// components
var navbar_component_1 = require("./components/navbar/navbar.component");
var about_component_1 = require("./components/about/about.component");
var contact_component_1 = require("./components/contact/contact.component");
var footer_component_1 = require("./components/footer/footer.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var administration_component_1 = require("./components/administration/administration.component");
var human_resorces_component_1 = require("./components/human-resorces/human-resorces.component");
var supervision_component_1 = require("./components/supervision/supervision.component");
var support_component_1 = require("./components/support/support.component");
var teachers_component_1 = require("./components/teachers/teachers.component");
var settings_component_1 = require("./components/settings/settings.component");
var chat_screen_component_1 = require("./components/chat-screen/chat-screen.component");
var blackboard_component_1 = require("./components/blackboard/blackboard.component");
var student_component_1 = require("./components/student/student.component");
var school_component_1 = require("./components/school/school.component");
var forms_1 = require("@angular/forms");
//sweet alert
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
//font-awesome
var environment_1 = require("../environments/environment");
//http module
var http_1 = require("@angular/common/http");
var Main_guard_1 = require("./services/Main.guard");
var politics_component_1 = require("./components/politics/politics.component");
// virtual scrolling
var scrolling_1 = require("@angular/cdk/scrolling");
var user_card_component_1 = require("./userCard/user-card/user-card.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                school_component_1.SchoolComponent,
                administration_component_1.AdministrationComponent,
                human_resorces_component_1.HumanResorcesComponent,
                supervision_component_1.SupervisionComponent,
                support_component_1.SupportComponent,
                teachers_component_1.TeachersComponent,
                settings_component_1.SettingsComponent,
                chat_screen_component_1.ChatScreenComponent,
                blackboard_component_1.BlackboardComponent,
                student_component_1.StudentComponent,
                politics_component_1.PoliticsComponent,
                user_card_component_1.UserCardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                routes_1.APP_ROUTING,
                ngx_sweetalert2_1.SweetAlert2Module,
                forms_1.FormsModule,
                ngx_socket_io_1.SocketIoModule.forRoot(config),
                http_1.HttpClientModule,
                scrolling_1.ScrollingModule,
            ],
            providers: [
                Main_guard_1.RegisterGuard,
                Main_guard_1.SchoolGuard,
                Main_guard_1.HumanResorcesGuard,
                Main_guard_1.SupervisionGuard,
                Main_guard_1.AdminGuard,
                Main_guard_1.TeachersGuard,
                Main_guard_1.SettingsGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
