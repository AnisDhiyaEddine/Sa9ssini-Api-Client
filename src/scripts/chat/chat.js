const io = require("socket.io-client");
const socket = io.connect("http://localhost:8080");

socket.on("connect", () => {
  console.log("Socket.io server Successfully connected!");
});
///////////////////////////////////////////////////////////////////

//View Unit
const UIController = () => {
  //Get DOM strings
  const DOMStrings = {
    freindList: document.querySelector(".friend-list"),
    chat: document.querySelector(".chat"),
    messageForm: document.querySelector("#message-form"),
    messageInput: document
      .querySelector("#message-form")
      .querySelector("input"),
    messageButton: document
      .querySelector("#message-form")
      .querySelector("#send-message"),
    locationButton: document
      .querySelector("#message-form")
      .querySelector("#send-location"),
  };

  const Templates = {
    messageSentTemplate: `<div class="message"><li class="right clearfix"><span class="chat-img pull-right"><img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar"></span><div class="chat-body clearfix"><div class="header"><small class="pull-right text-muted"><i class="fa fa-clock-o"></i> {{createdAt}}</small></div><p>{{message}}</p></div></li></div>`,
    locationSentTemplate: `<div class="message"><li class="right clearfix"><span class="chat-img pull-right"><img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar"></span><div class="chat-body clearfix"><div class="header"><small class="pull-right text-muted"><i class="fa fa-clock-o"></i> {{createdAt}}</small></div><p><a href={{url}}>Location</a></p></div></li></div>`,
    messageRecievedTemplate: `<div class="message"><li class="left clearfix"><span class="chat-img pull-left"><img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar"></span><div class="chat-body clearfix"><div class="header"><strong class="primary-font" class="message__name">{{username}}</strong><small class="pull-right text-muted"><i class="fa fa-clock-o" class="message__meta"></i> {{createdAt}}</small></div><p>{{text}}</p></div></li></div>`,
    locationRecievedTemplate: `<div class="message"><li class="left clearfix"><span class="chat-img pull-left"><img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar"></span><div class="chat-body clearfix"><div class="header"><strong class="primary-font" class="message__name">{{username}}</strong><small class="pull-right text-muted"><i class="fa fa-clock-o" class="message__meta"></i> {{createdAt}}</small></div><p><a href={{url}}>Location</a></p></div></li></div>`,
  };

  const getMsgInput = () => {
    return DOMStrings.messageInput.value;
  };

  const displayMsg = (html) => {
    DOMStrings.chat.insertAdjacentHTML("beforeend", html);
  };

  const disableBtn = () => {
    DOMStrings.messageButton.setAttribute("disabled", "disabled");
  };

  const formatBtn = () => {
    DOMStrings.messageButton.removeAttribute("disabled");
    DOMStrings.messageInput.value = "";
    DOMStrings.messageInput.focus();
  };

  //Get UserName and room name
  const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return {
    DOMStrings,
    Templates,
    getMsgInput,
    displayMsg,
    disableBtn,
    formatBtn,
    username,
    room,
  };
};

const APPController = () => {
  const UICtrl = UIController();
  const ModelCtrl = ModelController();
  //listen for incoming messages
  ModelCtrl.listenIncMsg(UICtrl.Templates.messageRecievedTemplate);

  //Send message     --fronties improvments
  UICtrl.DOMStrings.messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ModelCtrl.sendMsg(
      UICtrl.getMsgInput(),
      UICtrl.Templates.messageSentTemplate
    );
  });

  //share location
  UICtrl.DOMStrings.locationButton.addEventListener("click", (e) => {
    e.preventDefault();
    ModelCtrl.shareLocation(UICtrl.Templates.locationSentTemplate);
  });

  //listen for incoming location share
  ModelCtrl.listenLocation(UICtrl.Templates.locationRecievedTemplate);

  //Join a chat room
  ModelCtrl.join(UICtrl);
};

const ModelController = () => {
  //Basic usage of UICtrl
  const UICtrl = UIController();

  const listenIncMsg = (template) => {
    socket.on("message", (input) => {
      if (input) {
        const html = Mustache.render(template, {
          username: input.username,
          text: input.text,
          createdAt: moment(input.createdAt).format("h:mm a"),
        });
        UICtrl.displayMsg(html);
      }
    });
  };

  const sendMsg = (input, template) => {
    socket.emit("sendMessage", input, () => {
      const html = Mustache.render(template, {
        message: input,
        createdAt: moment(input.createdAt).format("h:mm a"),
      });
      UICtrl.disableBtn();
      UICtrl.displayMsg(html);
      UICtrl.formatBtn();
    });
  };

  const shareLocation = (template) => {
    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser.");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit(
        "sendLocation",
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        () => {
          const html = Mustache.render(template, {
            url: `https://google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`,
            createdAt: moment(new Date().getTime()).format("h:mm a"),
          });
          UICtrl.displayMsg(html);
        }
      );
    });
  };

  const listenLocation = (template) => {
    socket.on("locationMessage", (message) => {
      const html = Mustache.render(template, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format("h:mm a"),
      });
      UICtrl.displayMsg(html);
    });
  };

  const join = ({ username, room }) => {
    socket.emit("join", { username, room }, (error) => {
      if (error) {
        alert(error);
        location.href = "/";
      }
    });
  };

  return { listenIncMsg, sendMsg, shareLocation, listenLocation, join };
};

APPController();
