"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMCountry = new Schema({
    COUNTRY_ID: { type: Number, },
    COUNTRYCODE: { type: String, },
    COUNTRYNAME: { type: String, },
    CONTINENT: { type: String, },
    CAPITAL: { type: String, },
    FLAG: { type: String, },
    DEMONYM: { type: String, },
    ISDCODE: { type: String, },
    CURRENCYID: { type: Number, },
});

sMCountry.plugin(require("mongoose-timestamp"));
sMCountry.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("mastercountry", sMCountry);

