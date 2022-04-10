const express = require('express'); 
const Crop = require("../models/Crop"); //include crop 
const {verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = express.Router();




//Create
//verify users token and create new Crop by users
router.post('/',verifyTokenAndAuthorization, async(req,res)=>{
    const newCrop = new Crop(req.body);

    try {
      const savedCrop = await newCrop.save();
      res.status(200).json(savedCrop);
    } catch (err) {
      res.status(500).json(err);
    }
})




//Update Crops
//Takes crop's id and update whatever user's update
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
//Take crop's id and deletes the specific crop
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await Crop.findByIdAndDelete(req.params.id);
      res.status(200).json("Crop has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });



//Get Crops
//take specific crop's id and find that crop
router.get("/find/:id", async (req, res) => {
    try {
      const crops = await Crop.findById(req.params.id);
      res.status(200).json(crops);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL Crops
  //Get Multiple Crops
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let crops;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        crops = await Crop.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        crops = await Crop.find();
      }
  
      res.status(200).json(crops);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;