// tslint:disable-next-line: typedef

import { EventEmitter } from "@angular/core";
import { scrollBottom } from "./chat-helpers";

export function chatConnection(
  user: object,
  data: EventEmitter<any>,
  socket: any,
  messages: any
) {
  if (user) {
    socket.on("connect", () => {
      socket.emit("enterToRoom", user, (resp) => {
        console.log("Usuarios Conectados", resp);

        data.emit(resp);
      });
      console.log("Conectado al servidor");
    });

    // escuchar
    // tslint:disable-next-line: typedef
    socket.on("disconnect", (message) => {
      console.log("disconnect", message);
      console.log("Perdimos conexión con el servidor");
    });

    // Escuchar información del servidor
    socket.on("createMessage", (message) => {


      messages.push(message);

     // scrollBottom();
    });

    // listen users's changes
    //when someone left the Room
    socket.on("peopleList", (people) => {
      console.log("peopleList", people);
      data.emit(people);
    });

    // private Message

    socket.on("privateMessage", (message: any) => {
      console.log("private Message:", message);
    });
  }
}
