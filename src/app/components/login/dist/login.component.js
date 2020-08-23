"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.user = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (forma) {
        var _this = this;
        if (forma.invalid) {
            Object.values(forma.controls).forEach(function (control) {
                control.markAllAsTouched();
            });
            return;
        }
        else {
            var login = forma.value;
            var email = login['email'].replace(/(^"|"$)/g, "");
            var password = login['password'].replace(/(^"|"$)/g, "");
            var postLogin = this.mainService.postLogin(email, password).pipe(operators_1.map(function (x) {
                // Map operator tranforming the data into a object
                var logIn = {};
                Object.defineProperties(logIn, {
                    token: {
                        value: x["token"],
                        writable: false
                    },
                    role: {
                        value: x["user"]["role"],
                        writable: false
                    },
                    ok: {
                        value: x["ok"],
                        writable: false
                    },
                    date: {
                        value: new Date().getTime(),
                        writable: false
                    },
                    name: {
                        value: x["user"]["firstname"] + " " + x["user"]["lastname"],
                        writable: false
                    }
                });
                if (logIn["role"] === "USER_ROLE" ||
                    logIn["role"] === "TEACHER_ROLE") {
                    Object.defineProperty(logIn, "room", {
                        value: x["user"]["grade"] + "-" + x["user"]["roomLetter"],
                        writable: false,
                        enumerable: true,
                        configurable: false
                    });
                }
                return logIn;
            }));
            postLogin.subscribe(function (user) { return _this.mainService.getTokenRoleRoom(user); });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
