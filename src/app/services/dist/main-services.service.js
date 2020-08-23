"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainServicesService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var MainServicesService = /** @class */ (function () {
    function MainServicesService(socket, http, adminGard, schoolG, hresurces, sVisionG, teacherG, router) {
        this.socket = socket;
        this.http = http;
        this.adminGard = adminGard;
        this.schoolG = schoolG;
        this.hresurces = hresurces;
        this.sVisionG = sVisionG;
        this.teacherG = teacherG;
        this.router = router;
        this.url = environment_1.environment.wsUrl;
        this.roonAndName = {};
        this.checkStatus();
    }
    // tslint:disable-next-line: typedef
    MainServicesService.prototype.checkStatus = function () {
        var _this = this;
        this.socket.on("connect", function () {
            console.log("Conectado al servidor");
            _this.socketStatus = true;
        });
        this.socket.on("disconnect", function () {
            console.log("Desconectado del servidor");
            _this.socketStatus = false;
        });
    };
    MainServicesService.prototype.postLogin = function (email, password) {
        try {
            return this.http.post(this.url + "/login?email=" + email + "&password=" + password, { email: email, password: password }, {
                params: {
                    email: email,
                    password: password
                },
                headers: { "Content-Type": "application/json" }
            });
        }
        catch (err) {
            console.error(err);
        }
    };
    MainServicesService.prototype.getTokenRoleRoom = function (TaRR) {
        console.log("TaRR", TaRR);
        this.oks = TaRR["ok"];
        switch (TaRR["role"]) {
            case "ADMIN_ROLE":
                this.adminGard.Auth(this.oks);
                return this.router.navigateByUrl("/admin");
                break;
            case "HHRR_ROLE":
                this.hresurces.Auth(this.oks);
                return this.router.navigateByUrl("/hhrr");
                break;
            case "SVISION_ROLE":
                this.sVisionG.Auth(this.oks);
                return this.router.navigateByUrl("/svision");
                break;
            case "TEACHER_ROLE":
                this.teacherG.Auth(this.oks);
                this.getNameAndRoom(TaRR["name"], TaRR["room"]);
                return this.router.navigateByUrl("/teacher");
                break;
            case "USER_ROLE":
                this.schoolG.Auth(this.oks);
                this.getNameAndRoom(TaRR["name"], TaRR["room"]);
                return this.router.navigateByUrl("/school");
                break;
            default:
                return this.router.navigateByUrl("/home");
        }
    };
    MainServicesService.prototype.getNameAndRoom = function (name, room) {
        Object.defineProperties(this.roonAndName, {
            name: {
                value: name,
                writable: false,
                enumerable: true
            },
            room: {
                value: room,
                writable: false,
                enumerable: true
            }
        });
    };
    MainServicesService.prototype.logOut = function () {
        this.oks;
        this.roonAndName = {};
        this.adminGard.Auth(false);
        this.hresurces.Auth(false);
        this.sVisionG.Auth(false);
        this.teacherG.Auth(false);
        this.schoolG.Auth(false);
    };
    MainServicesService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], MainServicesService);
    return MainServicesService;
}());
exports.MainServicesService = MainServicesService;
