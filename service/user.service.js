const userDb = require('./database/user.database');
 

exports.login = async (params) => {
    // console.log("this is my paramerters", params);
    let loginuser = await userDb.login(params);
   try {
    if (loginuser != 'user do not found') {
        const userdetails = loginuser;
        const User ={
            userId:userdetails.userId,
            first_name:userdetails.fName+' '+userdetails.lName,
            mobile:userdetails.mobile,
            email:userdetails.email,
            roleId:userdetails.roleId,
        }
        const model={
            message:"login success",
            token:userdetails._id,
            success:true,
            responseData:User
        }
    return model;
    } else {
        const model={
            message:"login failed",
            success:false,
            // totalRecord:userdetails.length,
            responseData:""
        }
    return model;
    }
   } catch (e) {
   return   "api error occure :",e;
   }
    
};
