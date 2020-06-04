const { post } = require("../config");

module.exports = async (user_01, user_02) => {
  try {
    const {data} = await post({
      url: "/chats",
      data: {
        user_01,
        user_02,
      },
    });
    return data
  } catch (error) {
    console.log(error);
  }
};
