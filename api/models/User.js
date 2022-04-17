const mongoose = require("mongoose");

//User's Schema
// This is the schema of how the database stores the user's data 
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            unique:true,
        },
        email: {
            type: String,
            required:true,
            unique:true,
        },
        password: {
            type: String,
            required:true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
        {timestamps : true}

);

module.exports = mongoose.model("User", userSchema);