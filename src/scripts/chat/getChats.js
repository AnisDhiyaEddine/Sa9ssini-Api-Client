const { get } = require("../config");

module.exports = async () => {
  try {
    const { data } = await get({
      url: "/chats",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
