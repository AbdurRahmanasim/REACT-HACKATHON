const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const userschema =  new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    contact : {
     type : String,
     required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const model = mongoose.model("users" , userschema);

module.exports = model