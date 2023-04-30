const users = require("../../model/user.model");

  

exports.login = async (data) => {
  try {
     let userlogin = await users.findOne({
      email: data.email,
      password: data.password,
    });
    if (userlogin == null) {
      return "user do not found";
    } else {
      return userlogin;
    }
  } catch (e) {
    throw new Error("api error at user.database.js : " + e.message);
  }
};
