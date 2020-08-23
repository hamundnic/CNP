const QRCode = document.getElementById('QRcodeForm').addEventListener('submit', QrsumitForm);

function QrsumitForm(e) {
    e.preventDefault();
    const qrcode = document.querySelector('#qrcode').value;
    //console.log(qrcode)
    var socket = io();
    socket.emit('qrcode', {
        token: qrcode

    });


}