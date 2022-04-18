const express = require('express');
const router = express.Router();  //include router
const User = require('../models/User') // include user
const CryptoJS = require('crypto-js') // include CryptoJs
const jwt = require('jsonwebtoken') // include JSON Web Token


// Register

router.get('/register',(req,res)=>{
    res.send("successful")
})  

// Get Register Data from front end and saves it to Database
router.post('/register', async (req,res)=>{ 
    const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC.toString()), // Crypto-js encryption
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         age: req.body.age,
         gender: req.body.gender,
         maritalStatus: req.body.maritalStatus,
         motherName: req.body.motherName,
         fatherName: req.body.fatherName,
         spouseName: req.body.spouseName

    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        console.log(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
   
})





//login
//Get Data from login route and authenticate user
router.post("/login", async (req,res) => {
     
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");
    
        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);   //Crypto-js Decryption
    
        OriginalPassword !== req.body.password &&
          res.status(401).json("Wrong credentials!");
            const accessToken = jwt.sign({
                id: user._id, 
                isAdmin: user._isAdmin  //Checks Admin
            },
            process.env.JWT_SEC,
            {expiresIn:'3d'}
            )
            const {password, ...others} = user._doc;

      
          res.status(200).json({...others,accessToken})
       

            
        } catch (err) {
            res.status(500).json(err);
          }
})


module.exports = router;