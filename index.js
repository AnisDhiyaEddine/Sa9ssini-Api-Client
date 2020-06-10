require("regenerator-runtime/runtime");
console.log("hello and welcome Anis");

const getUser = require("./src/scripts/user/getOwnProfile");
const deleteProfile = require("./src/scripts/user/deleteProfile");
const signup = require("./src/scripts/user/signup");
const getOtherProfile = require("./src/scripts/user/getOtherProfile");
const getOtherProfileByName = require("./src/scripts/user/getOtherProfileByName");
const uploadBckgroundPicture = require("./src/scripts/user/addBackgroundImg");
const uploadProfilePicture = require("./src/scripts/user/addProfileImg");
const updateProfile = require("./src/scripts/user/updateProfile");
const login = require("./src/scripts/user/login");
const logout = require("./src/scripts/user/logout");
const logoutAll = require("./src/scripts/user/logoutAll");
const addSkill = require("./src/scripts/skills/addSkill");
const deleteSkill = require("./src/scripts/skills/deleteSkill");
const getMySkills = require("./src/scripts/skills/getMySkills");
const getOthersSkills = require("./src/scripts/skills/getOthersSkills");
const getSkillByName = require("./src/scripts/skills/getSkillByName");
const rateSkill = require("./src/scripts/skills/rateSkill");
const updateSkill = require("./src/scripts/skills/updateSkill");
const {
  getActiveUsers,
  getChats,
  getMessages,
  sendMessage,
  startChat,
} = require("./src/scripts/chat/offlineChatUtils");

const {
  postQuestion,
  getOwnQuestions,
  getQuestionById,
  updateQuestion,
  addQuestionTag,
  deleteQuestion,
  addAnswer,
  getBestAnswer,
  getQuestionAnswers,
  addAnswerTag,
  rateAnswer,
} = require("./src/scripts/QA/QAUtils");

/*
addAnswer("5ee087da0a52fb19e16e4f0e", "this is an answer").then((data) =>
  console.log(data)
);
getBestAnswer("5ee087da0a52fb19e16e4f0e").then((data) =>
  console.log(data)
);

addAnswerTag("#Nodejs", "5ee0fe4acf8f12467f909a23").then((data) =>
  console.log(data)
);
*/

rateAnswer("5ee0fe4acf8f12467f909a23", 5).then((data) => console.log(data));
