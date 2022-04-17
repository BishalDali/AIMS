const jwt = require('jsonwebtoken') // include JSON Web Token

//Verify Token
const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT,(err,user)=>{
            if(err) res.status(403).json("Token not valid!!")
            req.user = user;
            next()
        })
    }else
    {
        return res.status(401).json("You are not authenticated!!")
    }
}


// Authorization 
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };


module.exports = { verifyToken, verifyTokenAndAuthorization };