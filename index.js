require("regenerator-runtime/runtime");
console.log("hello and welcome Anis");

const getUser = require("./src/scripts/user/getOwnProfile");
const deleteProfile = require("./src/scripts/user/deleteProfile");
const signup = require("./src/scripts/user/signup");
const getOtherProfile = require("./src/scripts/user/getOtherProfile");
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
const startChat = require("./src/scripts/chat/startChat");
const getChats = require("./src/scripts/chat/getChats");
const getMessages = require("./src/scripts/chat/getMessages");
const sendMessage = require("./src/scripts/chat/sendMessage");

getMessages("5ed8f9824da204515aa36349","5ed801f11037031151f52153").then((data) => console.log(data));
