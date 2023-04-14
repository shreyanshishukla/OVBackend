const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Candidates', candidateSchema);