"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterpincodesSchema = new Schema({
  officename: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },

  officeType: {
    type: String,
    required: true,
  },

  Deliverystatus: {
    type: String,
    required: true,
  },

  divisionname: {
    type: String,
    required: true,
  },

  regionname: {
    type: String,
    required: true,
  },

  circlename: {
    type: String,
    required: true,
  },

  Taluk: {
    type: String,
    required: true,
  },

  Districtname: {
    type: String,
    required: true,
  },

  statename: {
    type: String,
    required: true,
  },

  Telephone: {
    type: String,
    required: true,
  },

  longitude: {
    type: String,
    required: true,
  },

  latitude: {
    type: String,
    required: true,
  },

  active: {
    type: Number,
    required: true,
    default: 1,
  },
});

masterpincodesSchema.plugin(require("mongoose-timestamp"));
masterpincodesSchema.plugin(require("mongoose-delete"), {
  overrideMethods: true,
  deletedAt: true,
});

module.exports = mongoose.model("masterpincodes", masterpincodesSchema);

 