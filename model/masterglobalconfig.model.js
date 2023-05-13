"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMGlobalConfig = new Schema({
    ID : { type:String, },
GlobalVariableName : { type:String, },
GlobalVariableValue : { type:String, },
GlobalVariableTitle : { type:String, },
GlobalVariableCategory : { type:String, },
ModifiedBy : { type:String, },
ModifiedOn : { type:String, },
IsActive : { type:String, },
});

sMGlobalConfig.plugin(require("mongoose-timestamp"));
sMGlobalConfig.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterglobalconfig", sMGlobalConfig);

