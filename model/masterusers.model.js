"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMUsers = new Schema({
    UserID: {
        type: Number,
         
    },
    SchoolCode: {
        type: String,
        
    },
    Title: {
        type: String,
        
    },
    FirstName: {
        type: String,
        
    },
    LastName: {
        type: String,
        
    },
    Street: {
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
    Country: {
        type: String,
        
    },
    UserPassword: {
        type: String,
        
    },
    UserEmail: {
        type: String,
        
    },
    AlternateEmail: {
        type: String,
        
    },
    EmailDistributionList: {
        type: String,
        
    },
    MobileNo: {
        type: String,
        
    },
    MobilePhoneProvider: {
        type: Number,
        
    },
    isAllowSmsMessage: {
        type: Boolean,
        
    },
    OfficePhone: {
        type: String,
        
    },
    OfficeAddress: {
        type: String,
        
    },
    UserTypeID: {
        type: Number,
        
    },
    UserType: {
        type: String,
        
    },
    PasswordModifiedDate: {
        type: Date,
        
    },
    UserStatus: {
        type: Number,
        
    },
    AcceptTermsDate: {
        type: Date,
        
    },
    UserCreatedDate: {
        type: Date,
        
    },
    UserModifiedDate: {
        type: Dste,
        
    },
    UserPwdEncrypted: {
        type: String,
        
    },
    isAdminLevel: {
        type: Boolean,
        
    },
    PasswordTokenVerify: {
        type: String,
        
    },
    PasswordTokenSentDate: {
        type: Date,
        
    },
});

sMUsers.plugin(require("mongoose-timestamp"));
sMUsers.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("masterusers", sMUsers);


