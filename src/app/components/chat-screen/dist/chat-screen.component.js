"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatScreenComponent = void 0;
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var environment_1 = require("../../../environments/environment");
var chatConnection_1 = require("./chatConnection");
var ChatScreenComponent = /** @class */ (function () {
    function ChatScreenComponent(mainService) {
        this.mainService = mainService;
        this.isChatScreen = false;
        this.formEnviar = document.getElementById('formEnviar');
        this.data = new core_1.EventEmitter();
        this.uri = environment_1.environment.wsUrl;
        this.socket = io(this.uri);
    }
    ChatScreenComponent.prototype.ngOnInit = function () {
        this.roomandName = this.mainService.roonAndName;
        if (this.roomandName !== undefined) {
            this.user = {
                name: this.roomandName["name"],
                room: this.roomandName["room"]
            };
            chatConnection_1.chatConnection(this.user, this.data, this.socket);
        }
    };
    ChatScreenComponent.prototype.chatMessage = function (forma) {
        console.log(forma.value);
        this.textting = forma.value;
    };
    __decorate([
        core_1.Output()
    ], ChatScreenComponent.prototype, "data");
    ChatScreenComponent = __decorate([
        core_1.Component({
            selector: "app-chat-screen",
            templateUrl: "./chat-screen.component.html",
            styleUrls: ["./chat-screen.component.css"]
        })
    ], ChatScreenComponent);
    return ChatScreenComponent;
}());
exports.ChatScreenComponent = ChatScreenComponent;
