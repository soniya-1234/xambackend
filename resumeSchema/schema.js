const mongoose = require("mongoose");

const resumeSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    }
})

const ResumeModel = mongoose.model("Resume", resumeSchema);

module.exports = ResumeModel;