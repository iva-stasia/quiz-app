const userService = {
  getUserData: () => {
    const userData1 = JSON.parse(localStorage.getItem("question1"));
    const userData2 = JSON.parse(localStorage.getItem("question2"));
    const userData3 = JSON.parse(localStorage.getItem("question3"));
    const userData4 = JSON.parse(localStorage.getItem("question4"));
    const userData5 = JSON.parse(localStorage.getItem("question5"));
    const userData6 = JSON.parse(localStorage.getItem("question6"));

    return [userData1, userData2, userData3, userData4, userData5, userData6];
  },
  getUserDataByQuestion: (question) => {
    const userData = JSON.parse(localStorage.getItem(question));

    return userData;
  },
  updateUserData: (question, data) => {
    localStorage.setItem(question, JSON.stringify(data));
  },
  deleteUserData: () => {
    localStorage.clear();
  },
};

export { userService };
