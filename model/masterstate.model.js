"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMState = new Schema({
    STATE_ID: { type: Number, },
    COUNTRY_ID: { type: Number, },
    STATE_NAME: { type: String, },
    STATE_CODE: { type: Number, },
    CAPITAL: { type: String, },
    IS_UNION_TERRITORY: { type: String, },
});

sMState.plugin(require("mongoose-timestamp"));
sMState.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterstate", sMState);

