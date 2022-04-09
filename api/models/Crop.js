const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    province: { type: Number },
    marketPrice: { type: Number },
    farmerPrice: { type: Number },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);