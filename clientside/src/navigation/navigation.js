import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/users/login"
import Register from "../components/users/register"
import ProfileDetails from "../components/users/profile"
import DashboardTable from "../components/admins/dashboard"
import AdminLogin from "../components/admins/adminLogin"
import DashboardGraph from "../components/admins/graph"



const Navigation=()=>{


    return(
        <>
        <BrowserRouter>

       <Routes>
       <Route path="/" Component={Login} />
        <Route path="/signup" Component={Register} />
        <Route path="/profile" Component={ProfileDetails} />
        <Route path="/login" Component={AdminLogin} />
        <Route path="/dashboard" Component={DashboardTable} />
        <Route path="/graph" Component={DashboardGraph} />
       </Routes>
          
        </BrowserRouter>
        </>
    )
} 

export default Navigation;
















 {/* <NavbarHeader/> */}
        {/* <Routes>
        
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Register} />
        <Route path="/profile" Component={ProfileDetails} />
        <Route path="/dashboard" Component={DashboardTable} />
        <Route path="/adminlogin" Component={AdminLogin} />
        </Routes> */}