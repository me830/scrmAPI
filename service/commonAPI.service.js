const commonAPIdb = require("./database/commonAPI.db");
 
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
