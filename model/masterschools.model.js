"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMSchools = new Schema({
    ID: {
        type: Number,
    },
    SchoolCode: {
        type: String,
    },
    SchoolName: {
        type: String,
    },
    StreetI: {
        type: String,
    },
    StreetII: {
        type: String,
    },
    City: {
        type: String,
    },
    State: {
        type: String,
    },
    ZipCode: {
        type: Number,
       },
    Phone: {
        type: Number,

    },
    Fax: {
        type: Number,
    },
    EmailAddress: {
        type: String,

    },
    SchoolWebsite: {
        type: String,

    },
    PrimaryContactTitle: {
        type: String,

    },
    PrimaryContactName: {
        type: String,

    },
    ContactMobile: {
        type: String,

    },
    ContactEmail: {
        type: String,

    },
    SchoolLogo: {
        type: String,

    },
    isShowSchoolLogo: {
        type: String,

    },
    MaxUsersAllowed: {
        type: String,

    },
    SchoolStatus: {
        type: String,

    },
    CreatedOn: {
        type: String,

    },
    CreatedBy: {
        type: String,

    },
    ModifiedOn: {
        type: String,

    },
    ModifiedBy: {
        type: String,

    },
    IsActive: {
        type: String,

    },
});

sMSchools.plugin(require("mongoose-timestamp"));
sMSchools.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterschools", sMSchools);

