require("regenerator-runtime/runtime");
console.log("hello and welcome Anis");

const getUser = require("./src/scripts/user/getOwnProfile");
//getUser()

//delete profile returns a promise .. consume it
const deleteProfile = require("./src/scripts/user/deleteProfile");

const signup = require("./src/scripts/user/signup");
//signup("AnisDhiyaEddine","dhiaeboudiaf@gmail.com","hello hello")

//getOtherProfile returns a promise consume it
const getOtherProfile = require("./src/scripts/user/getOtherProfile");
//getOtherProfile("5ed4f3e5e7a2ef441e34bd97")

const uploadBckgroundPicture = require("./src/scripts/user/addBackgroundImg");
/*
//Uploaded succeffuly
document.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = new FormData();
    let imagefile = document.querySelector('#file');
    formData.append("backgroundPicture", imagefile.files[0]);
    try {
        await uploadBckgroundPicture(formData);
        let data = await getUser();
        console.log(data)
   //     document.querySelector('#image').src = data.imgUrl;
    } catch (error) { console.log(error) }
})
*/

const uploadProfilePicture = require("./src/scripts/user/addProfileImg");
/*
document.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formData = new FormData();
  let imagefile = document.querySelector("#file");
  formData.append("profilePicture", imagefile.files[0]);
  try {
    await uploadProfilePicture(formData);
    let data = await getUser();
    console.log(data);
    //     document.querySelector('#image').src = data.imgUrl;
  } catch (error) {
    console.log(error);
  }
});
*/

const updateProfile = require("./src/scripts/user/updateProfile");
/*
const updates = {
  userName: "khaoula",
  gender: "female",
  email: "khaoula@gmail.com",
  password: "ola ola", 
};

 updateProfile(updates);
*/

const login = require("./src/scripts/user/login");
//login("khaoula@gmail.com", "ola ola");

const logout = require("./src/scripts/user/logout");
//logout()

const logoutAll = require("./src/scripts/user/logoutAll");
//logoutAll();

const addSkill = require("./src/scripts/skills/addSkill");
//addSkill("Moraba", "etfol hada wa3rr").then(data => console.log(data));

const deleteSkill = require("./src/scripts/skills/deleteSkill");
//deleteSkill("5ed531b446f9281f8de5c6a3").then(data => console.log(data))

const getMySkills = require("./src/scripts/skills/getMySkills");
//getMySkills().then((data) => console.log(data));

const getOthersSkills = require("./src/scripts/skills/getOthersSkills");
//getOthersSkills("5ed52deb2f71d814c09cddaf").then((data) => console.log(data));

const getSkillByName = require("./src/scripts/skills/getSkillByName");
//getSkillByName("Moraba").then((data) => console.log(data));

const rateSkill = require("./src/scripts/skills/rateSkill");
//rateSkill("5ed5350386014d24494f0f88", 4).then((data) => console.log(data));

const updateSkill = require("./src/scripts/skills/updateSkill");
//updateSkill("5ed5413e88567a345ce40c78", "skill updated").then((data) => console.log(data));
