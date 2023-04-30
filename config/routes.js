"use strict";

const user = require("../routes/user.routes");
const commonAPI = require("../routes/commonAPI.routes");
// const tenant = require("../routes/pgTeant.routes");
 

module.exports = function (app) {
    app.use("/api/user",user);
    // app.use("/api/tenant",tenant);
    app.use("/api/commonAPI",commonAPI);
};