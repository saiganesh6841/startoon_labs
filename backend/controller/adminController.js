
const user=require("../model/userModel");
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const SECRET_KEY=process.env.SECRET_KEY


const adminController={

    adminLogin: async (req,res)=>{

        try{
            const { email, password } = req.body;

            const adminUser = await user.findOne({ email, roleType: 'admin' });
            console.log(adminUser)

            // checking password amtchang and admin
            if (adminUser && (await bcrypt.compare(password, adminUser.password))) {
                // jwt token
                const token = jwt.sign({ userId: adminUser._id, role: 'admin' }, SECRET_KEY);
                // Return success response with token
                return res.status(200).json({ status: "success", message: "Admin login successful", token });
            }  else {
              
                return res.status(401).json({ status: "failed", message: 'Invalid email or password' });
            }

        }
        catch(error){
            console.log(error)
            res.status(500).json({ status: "failed", error: error.message });
        }
    },

    adminDashboard: async (req,res)=>{

        try{
            const users = await user.find({ roleType: { $ne: 'admin' } });
            console.log(users)

            res.status(200).json({ status: "success", data: users });

        }
        catch(error){
            console.log(error)
            res.status(500).json({ status: "failed", error: error.message });
        }
    },

    searchName: async(req,res)=>{

        try{
            const {name}=req.query
            if (!name) {
                return res.status(400).json({ status: "failed", message: "Name parameter is required" });
            }
            const foundUser = await user.find({ name: { $regex: new RegExp(name, 'i') } });


            if (!foundUser) {
                return res.status(404).json({ status: "failed", message: "User not found" });
            }
            return res.status(200).json({ status: "success", data: foundUser });

        }
        catch(error){
            console.log(error)
            res.status(500).json({ status: "failed", error: error.message });
        }

    },

}

module.exports=adminController