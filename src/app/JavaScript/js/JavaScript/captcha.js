document.getElementById('subscribeForm').addEventListener('submit', submitForm);



function submitForm(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const captcha = document.querySelector('#g-recaptcha-response').value;

    fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                captcha
            })
        }).then((res) => res.json())
        .then((data) => {
            //console.log('data', data);

            var socket = io();
            socket.emit('captcha', {
                data
            })
        })

};