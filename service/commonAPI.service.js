const commonAPIdb = require("./database/commonAPI.db");
global.jwt = require("../config/jwt");
let jwt = require("jsonwebtoken");

exports.pincode = async (Id) => {
  // console.log(params, "params");
  const result = await commonAPIdb.pincode(Id);
  if (result.length >= 1) {
    const model = {
      message: "Successfully",
      success: true,
      totalRecord: result.length,
      // responseData: result,
      responseData: result[0],
    };
    return model;
  } else {
    const model = {
      message: "no record found",
      success: false,
      totalRecord: result.length,
      responseData: "",
    };
    return model;
  }
};
exports.moduleInsert = async (data) => {
  const result = await commonAPIdb.moduleInsert(data);
  if (result == 'success') {
    const model = {
      message: "Successfully",
      success: true,
      totalRecord: result.length,
      // responseData: result,
      responseData: result[0],
    };
    return model;
  } else {
    const model = {
      message: "no record found",
      success: false,
      totalRecord: result.length,
      responseData: "",
    };
    return model;
  }
};

exports.token = async (userdata) => {
  return await jwt.sign(userdata, global.jwt.secretKey, {
    algorithm: global.jwt.algorithm,
    expiresIn: "2m",
  });
};
