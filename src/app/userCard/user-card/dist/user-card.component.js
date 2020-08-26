"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserCardComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserCardComponent = /** @class */ (function () {
    function UserCardComponent() {
        this.data = new rxjs_1.Subject();
        this.mainText = [];
        this.getDataChat();
    }
    UserCardComponent.prototype.ngOnInit = function () {
        console.log(this.classItems);
        //this.concactInputs();
        console.log('classitems', this.classItems);
    };
    UserCardComponent.prototype.getDataChat = function () {
        var _this = this;
        if (!this.myObservableArray) {
            this.myObservableArray = this.getData();
            this.myObservableArray.subscribe(function () {
                var interval = setInterval(function () {
                    _this.dataDOM.scrollTop = _this.dataDOM.scrollHeight;
                }, 20);
                (function () { return clearInterval(interval); });
            });
        }
    };
    UserCardComponent.prototype.getData = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.mainText = _this.dataChat.concat(_this.message);
            _this.mainText = _this.mainText.sort(function (a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
            _this.data.next(_this.mainText);
        }, 500);
        (function () { return clearInterval(interval); });
        return this.data;
    };
    UserCardComponent.prototype.trackByFn = function (index, item) {
        return index - 1;
    };
    UserCardComponent.prototype.ngOnDestroy = function () {
        this.mainText = [];
    };
    __decorate([
        core_1.Input()
    ], UserCardComponent.prototype, "dataChat");
    __decorate([
        core_1.Input()
    ], UserCardComponent.prototype, "message");
    __decorate([
        core_1.Input()
    ], UserCardComponent.prototype, "dataDOM");
    UserCardComponent = __decorate([
        core_1.Component({
            selector: 'app-user-card',
            templateUrl: './user-card.component.html',
            styleUrls: ['./user-card.component.css']
        })
    ], UserCardComponent);
    return UserCardComponent;
}());
exports.UserCardComponent = UserCardComponent;
