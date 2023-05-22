"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mastermodule = new Schema({
  ID: { type: Number },
  title: { type: String },
  icon: { type: String },
  children: [{ id: Number, title: String, icon: String, link: String ,isactive:Boolean}],
  isActive: { type: Boolean },
  modifiedBy: { type: String },
  modifiedOn: { type: String },
});

mastermodule.plugin(require("mongoose-timestamp"));
mastermodule.plugin(require("mongoose-delete"), {
  overrideMethods: true,
  deletedAt: true,
  userId: true,
});

module.exports = mongoose.model("mastermodule", mastermodule);
