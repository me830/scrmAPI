const masterpincode = require("../../model/masterpincodes.model");
const mastermodule = require("../../model/mastermodule.model");

// pincodes api
exports.pincode = async (Id) => {
  try {
    // console.log(data);
    let result = await masterpincode
      .find({ pincode: Id })
      .sort({ Pincode: 1 });
    return result;
  } catch (e) {
    throw new Error(" Common database : " + e.message);
  }
};





// modules insert
exports.moduleInsert = async (data) => {
  let res = await mastermodule.find();
  let id = res.length+1;
  let childid = 9;

  if (id !=1) {
    childid = id+9;
  }
  console.log("data",data);
  try {
    const dataa = {
      ID: id,
      title: data.title,
      icon: data.icon,
      children: [
        {
          id: childid,
          title: data.children[0].title,
          icon: data.children[0].icon,
          link: data.children[0].link,
          isactive: data.children[0].isactive,
        },
      ],
      isActive: data.isActive,
      modifiedBy: data.userId,
    };
    let result = await new mastermodule(dataa).save();
    if (result._id) {
      return "success";
    } else {
      return "fail";
    }
  } catch (e) {
    throw new Error(" Common database : " + e.message);
  }
};
