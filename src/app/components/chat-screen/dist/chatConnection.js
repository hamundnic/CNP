"use strict";
// tslint:disable-next-line: typedef
exports.__esModule = true;
exports.chatConnection = void 0;
//import {UserRendering, renderingMessage,scrollBottom} from './chat-helpers';
function chatConnection(user, data, socket) {
    if (user) {
        socket.on("connect", function () {
            socket.emit("enterToRoom", user, function (resp) {
                console.log("Usuarios Conectados", resp);
                data.emit(resp);
                // UserRendering(resp);
            });
            console.log("Conectado al servidor");
        });
        // escuchar
        // tslint:disable-next-line: typedef
        socket.on("disconnect", function () {
            console.log("Perdimos conexión con el servidor");
        });
        // Escuchar información
        socket.on("createMessage", function (message) {
            console.log("Servidor:", message);
            // renderingMessage(message, false);
            // scrollBottom();
        });
        // listen users's changes
        //when someone left the Room
        socket.on("peopleList", function (people) {
            console.log(people);
            data.emit(people);
        });
        // private Message
        socket.on("privateMessage", function (message) {
            console.log("private Message:", message);
        });
    }
}
exports.chatConnection = chatConnection;
