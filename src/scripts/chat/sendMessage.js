const { post } = require("../config");
const getChats = require("./getChats");
const startChat = require("./startChat");

const handleChat = async (from_user, to_user) => {
  const chats = await getChats();
  console.log(chats)
  let chat;
  if (chats.length > 0) {
    let started = false;
    chats.forEach((el) => {
      if (
        (el.user_01 === from_user || el.user_01 === to_user) &&
        (el.user_02 === from_user || el.user_02 === to_user)
      ) {
        started = true;
        chat = el;
      }
    });
  }
  if (chat) {
    return chat;
  }
  chat = await startChat(from_user, to_user);
  return chat;
};

module.exports = async (message, from_user, to_user) => {
  const chat = await handleChat(from_user, to_user);
  const { data } = await post({
    url: `/chats/${chat._id}/messages`,
    data: {
      to_user,
      from_user,
      status: "sent",
      message,
    },
  });
  return data;
};
