const mongoose = require("mongoose");

//Crop's Schema
// This is the schema of how the database stores the crop data 
const cropSchema = new mongoose.Schema(
  {
    cropName: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    province: { type: Array },
    marketPrice: { type: Number },
    farmerPrice: { type: Number },
    phoneNumber: { type: Number},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);