"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var StudentComponent = /** @class */ (function () {
    function StudentComponent(changeDetector, mainService) {
        this.changeDetector = changeDetector;
        this.mainService = mainService;
        this.data = new rxjs_1.Subject();
        this.getDataChat();
    }
    StudentComponent.prototype.ngOnInit = function () { };
    StudentComponent.prototype.dataCh = function () {
        var _this = this;
        this.Obs$ = new rxjs_1.Observable(function (observer) {
            observer.next(_this.dataChat);
        });
        return this.Obs$;
    };
    StudentComponent.prototype.getDataChat = function () {
        if (!this.myObservableArray) {
            this.myObservableArray = this.getData();
        }
    };
    StudentComponent.prototype.getData = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.data.next(_this.dataChat);
            _this.changeDetector.detectChanges();
        }, 500);
        (function () { return clearInterval(interval); });
        return this.data;
    };
    StudentComponent.prototype.trackByFn = function (index, item) {
        return index - 1;
    };
    StudentComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        core_1.Input()
    ], StudentComponent.prototype, "dataChat");
    StudentComponent = __decorate([
        core_1.Component({
            selector: "app-student",
            templateUrl: "./student.component.html",
            styleUrls: ["./student.component.css"]
        })
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
