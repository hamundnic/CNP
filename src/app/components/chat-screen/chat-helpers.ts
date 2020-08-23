let params = new URLSearchParams(window.location.search);

const name = params.get("name");
const room = params.get("room");

// jquery references
let divUsuarios = $("#divUsuarios");
let formSend = $("#formSend");
let txtMessage = $("#txtMessage");
let divChatbox = document.getElementById("#divChatbox");

// Funciones para renderizar usuarios
export function UserRendering(people: any) {

    console.log('userRendering', people);
let html = '';
  html += "<li>";
  html +=
    '<a href="javascript:void(0)" class="active"> Chat de <span>' +
    params.get("room") +
    "</span></a>";
  html += "</li>";

/*  for (let i = 0; i < people.length; i++) {
    html += "<li>";
    html +=
      '<a data-id="' +
      people[i].id +
      '" href="javascript:void(0)"><img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>' +
      people[i].name +
      ' <small class="text-success">online</small></span></a>';
    html += "</li>";
  }*/
 divChatbox.append(html);
}

/*export function renderingMessage(message: string, mySelf: boolean) {
  let html = "";
  let date = new Date(message['date']);
  let hour = date.getHours() + ":" + date.getMinutes();
  let adminClass = "info";
  if (message['name'] === "Administrador") {
    adminClass = "danger";
  }
  if (mySelf) {
    html += '<li class="reverse">';
    html += '<div class="chat-content">';
    html += "<h5>" + message['name'] + " </h5>";
    html += '<div class="box bg-light-inverse">' + message['message'] + "</div>";
    html += " </div>";
    html +=
      '<div class="chat-img"><img src="assets/images/users/5.jpg" alt="user" /></div>';
    html += '<div class="chat-time">' + hour + "</div>";
    html += " </li>";
  } else {
    html += '<li class="animated fadeIn">';
    if (message['name'] !== "Administrador") {
      html +=
        ' <div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /></div>';
    }
    html += '<div class="chat-content">';
    html += "<h5>" + message['name'] + "</h5>";
    html +=
      '<div class="box bg-light-' +
      adminClass +
      '">' +
      message['message'] +
      "</div>";
    html += "</div>";
    html += '<div class="chat-time">' + hour + "</div>";
    html += " </li>";
  }
  divChatbox.append(html);
}

export function scrollBottom() {
  // selectors
  let newMessage = divChatbox.children("li:last-child");

  // heights
  let clientHeight = divChatbox.prop("clientHeight");
  let scrollTop = divChatbox.prop("scrollTop");
  let scrollHeight = divChatbox.prop("scrollHeight");
  let newMessageHeight = newMessage.innerHeight();
  let lastMessageHeight = newMessage.prev().innerHeight() || 0;

  if (
    clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=
    scrollHeight
  ) {
    divChatbox.scrollTop(scrollHeight);
  }
}

//Listeners
divUsuarios.on("click", "a", function () {
  let id = $(this).data("id");
  if (id) {
    console.log(id);
  }
});

formSend.on("submit", function (e) {
  e.preventDefault();

  if (txtMessage.val().trim().length === 0) {
    return;
  }
  /*socket.emit(
    "createMessage",
    {
      name,
      room,
      message: txtMessage.val(),
    },
    function (message) {
      txtMessage.val("").focus();
      renderingMessage(message, true);
      scrollBottom();
    }
  );

  console.log("submit",e);
});*/
