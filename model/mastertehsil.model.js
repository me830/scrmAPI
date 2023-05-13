"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMTehsil = new Schema({
TehsilID:{
    type:Number,
  },
  DistrictID:{
    type:Number,    
  },
  TeshilName:{
    type:String,    
  },
  TehsilCode:{
    type:Number,    
  }
});

sMTehsil.plugin(require("mongoose-timestamp"));
sMTehsil.plugin(require("mongoose-delete"), {
  overrideMethods: true,
  deletedAt: true,
});

module.exports = mongoose.model("mastertehsil", sMTehsil);

 