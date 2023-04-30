"use strict";

const user = require("../routes/user.routes");
// const SDC = require("../routes/commonSDC.routes");
// const tenant = require("../routes/pgTeant.routes");
 

module.exports = function (app) {
    app.use("/api/user",user);
    // app.use("/api/tenant",tenant);
    // app.use("/api/commonSDC",SDC);
};