const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
ctx.width = this.naturalWidth; // or 'width' if you want a special/scaled size
ctx.height = this.naturalHeight;
var xhr = new XMLHttpRequest();
xhr.open('POST', '/2fa', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    let QrOut = JSON.parse(xhr.responseText);
    image = new Image();
    image.src = QrOut['image_data'];
    image.addEventListener('load', function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        // resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));
        ctx.fillText(QrOut['tempSecret'], 23, 20);
        ctx.textAlign = "center";
        //secrect emit
        var secret = JSON.stringify(QrOut['tempSecret']);

    }, false);

};
xhr.send();