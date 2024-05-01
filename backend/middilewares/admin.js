
const jwt=require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY;
const User=require("../model/userModel")

const isAdmin =  async (req, res, next) => {
    
    try {
        
        const token = req.header('Authorization').replace('Bearer ', '');
        
        const decoded = jwt.verify(token, SECRET_KEY);
        
        const user = await User.findById(decoded.userId);

        if (!user || user.roleType !== 'admin') {
            throw new Error();
        }

        // Set the user in the request object
        req.user = user;

        // Call the next middleware/route handler
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ status: 'failed', message: 'Unauthorized' });
    }
};

module.exports=isAdmin