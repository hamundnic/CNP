"use strict";
// tslint:disable-next-line: typedef
exports.__esModule = true;
exports.chatConnection = void 0;
function chatConnection(user, data, socket, messages) {
    if (user) {
        socket.on("connect", function () {
            socket.emit("enterToRoom", user, function (resp) {
                console.log("Usuarios Conectados", resp);
                data.emit(resp);
            });
            console.log("Conectado al servidor");
        });
        // escuchar
        // tslint:disable-next-line: typedef
        socket.on("disconnect", function (message) {
            console.log("disconnect", message);
            console.log("Perdimos conexión con el servidor");
        });
        // Escuchar información del servidor
        socket.on("createMessage", function (message) {
            messages.push(message);
            // scrollBottom();
        });
        // listen users's changes
        //when someone left the Room
        socket.on("peopleList", function (people) {
            console.log("peopleList", people);
            data.emit(people);
        });
        // private Message
        socket.on("privateMessage", function (message) {
            console.log("private Message:", message);
        });
    }
}
exports.chatConnection = chatConnection;
