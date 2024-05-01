

let express=require('express')
const router=express.Router()

const userController=require("../controller/userController")
const validation=require("../middilewares/validation")
const auth=require("../middilewares/auth")

const adminController=require("../controller/adminController")
const isAdmin=require("../middilewares/admin")

// user routes
router.post("/user/signup",validation,userController.userRegister)
router.post("/user/signIn",userController.userLogin)
router.get("/user/profile",auth,userController.getUserDetails)

//admin routes
router.post("/admin/login",adminController.adminLogin)
router.get("/admin/dashboard",isAdmin,adminController.adminDashboard)
router.get("/admin/search",isAdmin,adminController.searchName)



module.exports=router