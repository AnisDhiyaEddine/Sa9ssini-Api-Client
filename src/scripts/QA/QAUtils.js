const { get, post, remove, patch } = require("../config");
import "regenerator-runtime/runtime";

const postQuestion = async (question, detail) => {
  try {
    let { data } = await post({
      url: "/questions/me",
      data: {
        question,
        detail,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getOwnQuestions = async () => {
  try {
    const { data } = await get({
      url: "/questions/me",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getQuestionById = async (questionID) => {
  try {
    const { data } = await get({
      url: `/questions/${questionID}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateQuestion = async (detail, questionID) => {
  try {
    const { data } = await patch({
      url: `/questions/me/${questionID}`,
      data: {
        detail,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addQuestionTag = async (tag, questionID) => {
  try {
    const { data } = await patch({
      url: `/questions/me/${questionID}/addTag`,
      data: {
        tag,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestion = async (questionID) => {
  try {
    const { data } = await remove({
      url: `/questions/me/${questionID}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postQuestion,
  getOwnQuestions,
  getQuestionById,
  updateQuestion,
  addQuestionTag,
  deleteQuestion,
};
