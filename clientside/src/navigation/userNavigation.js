import { Route, Routes } from "react-router-dom"
import Login from "../components/users/login";
import Register from "../components/users/register";
import ProfileDetails from "../components/users/profile";
import AdminLogin from "../components/admins/adminLogin";




const UserNavigation=()=>{

    return(
        <>
        
        <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Register} />
        <Route path="/profile" Component={ProfileDetails} />
        <Route path="/login" Component={AdminLogin} />
        </Routes>
        </>
    )
}

export default UserNavigation;