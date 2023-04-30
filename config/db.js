const mongoose = require("mongoose");

// Replace this with your MONGOURI.
 const MONGOURI = "mongodb://localhost:27017/SCRMDB";
// const MONGOURI = "mongodb+srv://mongopg:mongopgdb12@pg.rgduo1c.mongodb.net/PGManagement";
//  const MONGOURI = "mongodb+srv://pgmanagement:pgdbmanagement@cluster0.xj3aocc.mongodb.net/PGManagement?retryWrites=true&w=majority";

//const MONGOURI = "mongodb+srv://patilnayan092:Nayan22121992@dev-cluster-ecomlogisti.imint.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
secretKey: "secret";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log("db has error of connection")
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
