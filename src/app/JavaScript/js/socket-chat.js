var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('name') && !params.has('room')) {
    window.location = 'index.html';
    throw new Error('El nombre y la sala  son necesario');

} else {
    var user = {
        name: params.get('name'),
        room: params.get('room')
    }




    socket.on('connect', function() {
        console.log('Conectado al servidor');
        socket.emit('enterToRoom', user, function(resp) {
            // console.log('Usuarios Conectados', resp);

            UserRendering(resp);


        });
    });

    // escuchar
    socket.on('disconnect', function() {

        console.log('Perdimos conexión con el servidor');

    });


    // Enviar información
    /*socket.emit('enviarMensaje', {
        usuario: 'Fernando',
        mensaje: 'Hola Mundo'
    }, function(resp) {
        console.log('respuesta server: ', resp);
    });*/

    // Escuchar información
    socket.on('createMessage', function(message) {

        // console.log('Servidor:', message);
        renderingMessage(message, false);
        scrollBottom();

    });

    // listen users's changes
    //when someone left the Room
    socket.on('peopleList', function(people) {
        console.log(people);

        UserRendering(people);

    });

    // private Message

    socket.on('privateMessage', (message) => {
        console.log('private Message:', message);
    })

}