"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sMSection = new Schema({
    ACADEMICYEAR_ID : { type:Number,},
    SCHOOL_ID : { type:String, },
    STANDARD_ID : { type:String, },
    STREAM_ID : { type:String, },
    SECTION_ID : { type:String, },
    SECTION_NAME : { type:String, },
    MEDIUM_OF_INSTRUCTION_ID : { type:Number,},
    CLASS_TEACHER_ID : { type:String, },
    CREATED_BY : { type:String, },
    CREATED_ON : { type:String, },
    MODIFIED_BY : { type:String, },
    LAST_MODIFIED : { type:String, },
});

sMSection.plugin(require("mongoose-timestamp"));
sMSection.plugin(require("mongoose-delete"), {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model("mastersection", sMSection);

