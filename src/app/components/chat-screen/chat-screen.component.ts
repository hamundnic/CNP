import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import * as io from "socket.io-client";
import { MainServicesService } from "../../services/main-services.service";
import { environment } from "../../../environments/environment";
import { chatConnection } from "./chatConnection";
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-chat-screen",
  templateUrl: "./chat-screen.component.html",
  styleUrls: ["./chat-screen.component.css"],
})
export class ChatScreenComponent implements OnInit, OnDestroy {
  isChatScreen: boolean = false;
  roomandName: any;
  user: object;
  formEnviar = document.getElementById("formEnviar");
  @Output() data: EventEmitter<any> = new EventEmitter();
  messages: any = [];
  textting: any[] = [];
  socket: any;
  readonly uri = environment.wsUrl;
subscription: Subscription = new Subscription();
divUsuarios:any;
  constructor(private mainService: MainServicesService) {
    this.socket = io(this.uri);
  }

  ngOnInit() {

    this.divUsuarios= document.getElementById('divChatbox');
    this.roomandName = this.mainService.roonAndName;

    if (this.roomandName !== undefined) {
      this.user = {
        name: this.roomandName["name"],
        room: this.roomandName["room"],
      };
      chatConnection(this.user, this.data, this.socket, this.messages);
    }
  }

  chatMessage(forma: NgForm) {
    this.socket.emit(
      "createMessage",
      {
        name: this.user["name"],
        room: this.user["room"],
        message: forma.value,
      },
      (message) => {
        this.textting.push(message);
      }
    );
  }

  ngOnDestroy() {
    this.isChatScreen = false;
    this.roomandName = {};
    this.user = {};

    this.messages = [];
    this.textting = [];
    this.socket = [];
    this.subscription.add(this.data.subscribe());
    this.subscription.unsubscribe();
  }
}
