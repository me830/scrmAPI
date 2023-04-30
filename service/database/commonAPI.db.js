const masterpincode = require("../../model/masterpincodes.model");

// pincodes api
exports.pincode = async (Id) => {
  try {
    // console.log(data);
    let emailfound = await masterpincode
      .find({ pincode: Id })
      .sort({ Pincode: 1 });
    return emailfound;
  } catch (e) {
    throw new Error(" Common database : " + e.message);
  }
};
