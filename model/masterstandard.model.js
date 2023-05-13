"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMStandard = new Schema({
    STANDARD_ID : { type:String, },
    STANDARD_NAME : { type:String, },
    WING_LEVEL_ID : { type:String, },
    CREATED_BY : { type:String, },
    CREATED_ON : { type:String, },
    MODIFIEDBY : { type:String, },
    LASTMODIFIED : { type:String, },
    DELETED : { type:String, },
    MIN_APPROPRIATE_AGE : { type:Number,},
    MAX_APPROPRIATE_AGE : { type:Number,},
});

sMStandard.plugin(require("mongoose-timestamp"));
sMStandard.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterstandard", sMStandard);

