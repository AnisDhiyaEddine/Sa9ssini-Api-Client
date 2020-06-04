const { get } = require("../config");
const getChat = require("./getChats");

module.exports = async (chat_id, user_id) => {
  //you will always recive chat you're included in
  //user_id just to specify if you're the one who sent or recieved
  //invalid user_id .. signifies that he sent the messsage
  try {
    const { data } = await get({
      url: `/chats/${chat_id}/messages`,
    });
    if (data.length > 0) {
      data.forEach((message) => {
        if (message.to_user == user_id) {
          message.status = "recieved";
        }
      });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
