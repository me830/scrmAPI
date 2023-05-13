"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMSchoolsSites = new Schema({
    ID: {
        type: Number,
    },
    SchoolID: {
         type: Number,
    },
    SiteLocation: {
        type: String,
    },
    SchoolLevel: {
        type: String,
    },
    SiteServiceReps: {
        type: String,
    },
    SchoolBoard: {
        type: String,
    },
    BillingType: {
        type: String,
    },
    BillingDuration: {
        type: String,
    },
    SchoolSiteStartOn: {
        type: String,
    },
    SchoolSiteEmails: {
        type: String,
    },
    IsActive: {
        type: String,
    },

});

sMSchoolsSites.plugin(require("mongoose-timestamp"));
sMSchoolsSites.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterschoolssites", sMSchoolsSites);

