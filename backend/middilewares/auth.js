


const jwt=require('jsonwebtoken')
const SECRET_KEY=process.env.SECRET_KEY

const User = require('../model/userModel'); 

// function to verify the JWT tokens
const authenticateJwt = async (req, res, next) => {
  try {
    // Getting  the JWT token from the Authorization header
    // console.log(req.headers.authorization)
    if(req.headers.authorization === undefined){
      return res.status(400).json({ error: 'missing bear token' });
    }
    const token = req.headers.authorization.split(' ')[1];
    // if (!token) {
    //   return res.status(401).json({ error: 'missing bear token' });
    // }

    // Verifying the token
    const decoded = jwt.verify(token, SECRET_KEY); 

    // finding the user based on the decoded user ID
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: User not found' });
    }

    // Set the user on the request object
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports=authenticateJwt;