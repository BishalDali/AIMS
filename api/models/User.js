const mongoose = require("mongoose");

//User's Schema
// This is the schema of how the database stores the user's data 
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required:true,
        },
        lastName: {
            type: String,
            required:true,
        },
        age: {
            type: Number,
            required:true,
        },
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
        fatherName: {
            type: String,
            
        },
        motherName: {
            type: String,
            
        },
        spouseName: {
            type: String,
            
        },
        password: {
            type: String,
            required:true,
        },
        gender: {
            type: String,
            required:true,
        },
        maritalStatus: {
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