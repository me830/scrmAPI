"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMCity = new Schema({
    CITY_ID: { type: String, },
    CITY_NAME: { type: String, },
    CITY_CODE: { type: Number, },
    TEHSIL_ID: { type: Number, },
    CITY_TYPE: { type: Number, },
    CITY_NIC_CODE: { type: String, },
    panchayatId: { type: Number, },
});

sMCity.plugin(require("mongoose-timestamp"));
sMCity.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("mastercity", sMCity);

