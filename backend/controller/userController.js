
const user=require("../model/userModel")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const SECRET_KEY=process.env.SECRET_KEY


const userController={

    userRegister: async (req,res)=>{

        try{
            const {name,email,password,gender}=req.body
            console.log(req.body)
            
            const existingUser = await user.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ status: "failed", error: "Email or username already exists" });
            }
    
            // hashing  the password
            const hashedPassword = await bcrypt.hash(password, 10);

             // Create a new user object
             const newUser = new user({
                name,
                email,
                password: hashedPassword,
                gender
            });
    
            // Save the user to the database
            await newUser.save();
            res.status(201).json({ status: "success", message: "User registered successfully" });

        }
        catch(error){
            console.log(error)
            res.status(500).json({ status: "failed", error: error.message });
        }

    },

    userLogin: async (req,res)=>{

        try{
            const {identifier,password}=req.body
              
            //searching the user by mail
            const userFoundByEmail = await user.findOne({ email:identifier });
            if (userFoundByEmail) {
                if (await bcrypt.compare(password, userFoundByEmail.password)) {
                   //generating jwt token
                    const token = jwt.sign({ userId: userFoundByEmail._id }, SECRET_KEY);
                    userFoundByEmail.count += 1;
                    userFoundByEmail.lastLoginDate = new Date();
                    await userFoundByEmail.save();
                    //returning sucesss with token
                    return res.status(200).json({ status: "success", message: "Login successful", token });
                }
            }
// console.log(userFoundByEmail)
            // Searching the user by name
            const userFoundByName = await user.find({ name:identifier });
            if (userFoundByName.length > 0) {
                for (const userInstance of userFoundByName) {
                    if (await bcrypt.compare(password, userInstance.password)) {
                        // Generating JWT token
                        const token = jwt.sign({ userId: userInstance._id }, SECRET_KEY);
                        // Updating the count and lastLoginDate
                        userInstance.count += 1;
                        userInstance.lastLoginDate = new Date();
                        await userInstance.save();
                        // Returning success with token
                        return res.status(200).json({ status: "success", message: "Login successful", token });
                    }
                }
            }
            // If no user is found with the provided email or name, or password doesn't match, return an error response
            return res.status(401).json({ status: "failed", message: 'Invalid email/name, or password' });
        } 
        catch(error){
            console.log(error)
            res.status(500).json({ status: "failed", error: error.message });
        }
    },
    getUserDetails: async (req, res) => {
        try {
           console.log(req.user)
            const userId = req.user;
            console.log(userId)
            // getting user details from the database
            const userDetails = await user.findOne({_id:userId},{email:1,name:1,gender: 1});
            console.log(userDetails)

            if (!userDetails) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User details retrieved successfully', userDetails });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 'failed', error });
        }
    }
}

module.exports=userController