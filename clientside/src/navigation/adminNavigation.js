import { Route, Routes } from "react-router-dom"
import Navbar from "../components/admins/navbar"
import AdminLogin from "../components/admins/adminLogin"
import DashboardTable from "../components/admins/dashboard"
import DashboardGraph from "../components/admins/graph"



const AdminNavigation=()=>{
    
    return(
        <>
         <Navbar/>
        <Routes>
        
        <Route path="/dashboard" Component={DashboardTable} />
        <Route path="/graph" Component={DashboardGraph} />
        </Routes>
        </>
    )
}
export default AdminNavigation