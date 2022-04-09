const express = require('express');
const Crop = require("../models/Crop");
const {verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = express.Router();




//Create
router.post('/',verifyTokenAndAuthorization, async(req,res)=>{
    const newCrop = new Crop(req.body);

    try {
      const savedCrop = await newCrop.save();
      res.status(200).json(savedCrop);
    } catch (err) {
      res.status(500).json(err);
    }
})




// //Update Crops
router.put('/:id',verifyTokenAndAuthorization, async (req,res) =>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString();
      }
    
      try {
        const updatedCrop = await Crop.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCrop);
      } catch (err) {
        res.status(500).json(err);
      }
    });




//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await Crop.findByIdAndDelete(req.params.id);
      res.status(200).json("Crop has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Get Crops

router.get("/find/:id", async (req, res) => {
    try {
      const crops = await Crop.findById(req.params.id);
      res.status(200).json(crops);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;