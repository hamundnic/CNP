import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as io from "socket.io-client";
import { MainServicesService } from "../../services/main-services.service";
import { environment } from "../../../environments/environment";
import { chatConnection } from './chatConnection';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-chat-screen",
  templateUrl: "./chat-screen.component.html",
  styleUrls: ["./chat-screen.component.css"],
})
export class ChatScreenComponent implements OnInit {
 
  isChatScreen: boolean = false;
  roomandName: any;
  user: object;
  formEnviar = document.getElementById('formEnviar');
  @Output() data: EventEmitter<any> = new EventEmitter();
  textting:any;
  socket: any;
  readonly uri = environment.wsUrl;

  constructor(private mainService: MainServicesService) {
    this.socket = io(this.uri);
  }

  ngOnInit() {
    this.roomandName = this.mainService.roonAndName;
    if(this.roomandName !== undefined){
        this.user = {
      name: this.roomandName["name"],
      room: this.roomandName["room"],
    };
        chatConnection( this.user, this.data,this.socket);
      
  }
    }
  

chatMessage(forma: NgForm){

  console.log(forma.value);
  this.textting = forma.value;
}

}
