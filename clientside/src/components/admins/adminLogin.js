
import { Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core"
import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AdminChange } from "../../navigation/navigation";
import { baseUrl } from "../../App";

const AdminLogin=()=>{

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  // const {loginTrue}=useContext(AdminChange)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/admin/login`, {
        email: email,
        password: password
      });
      console.log(response.data);
    let token=response.data.token
      localStorage.setItem("token",token)
      alert(response.data.message)
      // loginTrue()
      navigate("/dashboard")
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error, e.g., display error message to the user
    }
  };

    const paperStyle={padding :20,height:"60vh",width:400 , margin:"90px auto"}
const avatarStyle={backgroundColor:"#1bbd7e"}
const btnStyle={margin:"8px 0"}
const nameStyle = {display: "inline",color: "red",fontSize: "44px",flexGrow: 1,background: "linear-gradient(135deg, #A80306, #E57E75)",WebkitBackgroundClip: "text",backgroundClip: "text",color: "transparent"};

    return(
        <>
        <Grid>
        <Paper elevation={15} style={paperStyle}>
          <Grid align="center">
          {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
          <h2 style={nameStyle}>ADMIN LOGIN</h2>
          <br/><br/>
          </Grid>
          
         <form onSubmit={handleLogin} >
         <TextField label="email" placeholder="Enter email" variant="standard" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
          <br></br>
          <TextField label="password" placeholder="Enter password" variant="standard" type="password" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />  <br></br>
          
                 <br></br> 
                 <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign in</Button>
         </form>
                 <br></br>
                 {/* <Typography > Do you have an account ?
                     <Link href="#" >
                        <NavLink to="/">Sign Up </NavLink>
                </Link>
                </Typography> */}
               
        </Paper>
       </Grid>
        </>
    )
}
export default AdminLogin