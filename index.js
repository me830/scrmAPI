const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const nocache = require("nocache");
const fileUpload = require("express-fileupload");
//  const ValidateBody = require('./middelware/error-handler');
// const errorHandler = require('./middleware/error-handler');
 const app = express();


// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:42001"
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
 
app.use(bodyparser.json({ limit: "100mb", parameterLimit: 100000000 }));
app.use(
  bodyparser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 100000000,
  })
);
app.use(nocache());
// app.use(fileUpload());

require("./config/db")(app);
require("./config/routes")(app);
app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV == 'production') {
//   require('./startup/prod')(app);
// }
// app.use(errorHandler);
// app.use(ValidateBody);

app.get("/",  (req, res) => {

  res.send({ Hello: "World", API: "On the running mode", StatusCode: "200",VedId:'Abhi' });
});
 
 
const port = process.env.PORT || 42001;
// let port = process.env.PORT;
if (port == null || port == "") {
  port = 42001;
}

app.listen(port, () => {
  console.log("Server started at port " + port);
  //   // readResponseForS3Job();
});

module.exports = app;