const users = require("../../model/user.model");
const acrypto = require('crypto');
let algorithm = require('../../config/jwt');
  
// login user 
exports.login = async (data) => {
  try {
    const epassword = await acrypto.createHmac('sha256',algorithm.cryptokey).update(data.password).digest('hex');
    
     let userlogin = await users.findOne({
      email: data.email,
      epassword: epassword,
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
// login user 
exports.adduser = async (data) => {
  try {
    const epassword = await acrypto.createHmac('sha256',algorithm.cryptokey).update(data.password).digest('hex');
    
    const record = {
      userId:1,
      fName:data.fName,
      lName:data.lName,
      email:data.email,
      mobile:data.mobile,
      password: data.password,
      epassword: epassword
    }
    var result = await new users(record).save();
    if (result._id) {
      return 'success';
    }else{
      return 'fail';
    }
    
  } catch (e) {
    throw new Error("api error at user.database.js : " + e.message);
  }
};


// get user 
exports.getuser = async () => {
  try {
    
   const result = users.find();
    if (result) {
      return result;
    }else{
      return 'fail';
    }
    
  } catch (e) {
    throw new Error("api error at user.database.js : " + e.message);
  }
};



// add new school 

