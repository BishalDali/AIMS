const express = require('express');
const { verifyTokenAndAuthorization } = require('./verifyToken');
const router = express.Router();


//Update User Credentials
router.put('/:id',verifyTokenAndAuthorization, async (req,res) =>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString();
      }
    
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/usertest',(req,res)=>{
    res.send("This also sucessful")
    console.log(req.body);
})

router.post('/userData',(req,res)=>{
    const username = req.body.username
    console.log(username);
    res.send(username)
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;