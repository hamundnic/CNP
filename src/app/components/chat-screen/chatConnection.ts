// tslint:disable-next-line: typedef

import { EventEmitter } from "@angular/core";
//import {UserRendering, renderingMessage,scrollBottom} from './chat-helpers';

export  function chatConnection( user: object,data:EventEmitter<any>,socket:any) {
    if (user) {
     socket.on("connect", () => {
       socket.emit("enterToRoom", user, (resp) => {
          console.log("Usuarios Conectados", resp);

          data.emit(resp);

          // UserRendering(resp);
        });
        console.log("Conectado al servidor");
      });

      // escuchar
      // tslint:disable-next-line: typedef
     socket.on("disconnect", () => {
        console.log("Perdimos conexión con el servidor");
      });

      // Escuchar información
     socket.on("createMessage", (message) => {
        console.log("Servidor:", message);
       // renderingMessage(message, false);
       // scrollBottom();
      });

      // listen users's changes
      //when someone left the Room
     socket.on("peopleList", (people) => {
            console.log(people);
        data.emit(people);
    
        
      });

      // private Message

     socket.on("privateMessage", (message: any) => {
        console.log("private Message:", message);
      });
    }
  }

