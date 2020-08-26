"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SchoolComponent = void 0;
var core_1 = require("@angular/core");
var schoolCamera_1 = require("./schoolCamera");
var rxjs_1 = require("rxjs");
var SchoolComponent = /** @class */ (function () {
    function SchoolComponent(mainService, changeDetector) {
        this.mainService = mainService;
        this.changeDetector = changeDetector;
        this.schoolCamera = new schoolCamera_1.SchoolCamera();
        this.isOpen = true;
        this.chatEvents = {}; //take are the users connected
        this.chatMessage = [];
        this.ObsSubc = new rxjs_1.Subscription();
    }
    SchoolComponent.prototype.ngOnInit = function () { };
    SchoolComponent.prototype.openVideo = function (e) {
        this.isOpen = !this.isOpen;
        if (this.isOpen === false) {
            return this.schoolCamera.init(e);
        }
        else {
            return;
        }
    };
    SchoolComponent.prototype.chatEvent = function (e) {
        var _this = this;
        console.log(e);
        this.Obs$ = new rxjs_1.Observable(function (observer) {
            observer.next(e);
        });
        this.ObsSubc = this.Obs$.subscribe(function (user) { return _this.chatEvents = user; });
        console.log("chatEvent", this.chatEvents);
    };
    SchoolComponent.prototype.ngOnDestroy = function () {
        this.ObsSubc.unsubscribe();
        this.chatEvents = {};
    };
    SchoolComponent = __decorate([
        core_1.Component({
            selector: "app-school",
            templateUrl: "./school.component.html",
            styleUrls: ["./school.component.css"]
        })
    ], SchoolComponent);
    return SchoolComponent;
}());
exports.SchoolComponent = SchoolComponent;
