import { Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { baseUrl } from "../../App";



const Login=()=>{

  const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate=useNavigate()

    const handleNameChange = (e) => {
      setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        identifier: identifier,
        password: password
    };
    try {
        const response = await axios.post(`${baseUrl}/user/signIn`, formData);
        console.log(response.data); 
        let token=response.data.token
        localStorage.setItem("TOKEN",token)
        alert(response.data.message)
        navigate("/profile")
    } catch (error) {
        console.error('Error:', error);
        alert(error.response.data.message)
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
          <h2 style={nameStyle}>Sign In</h2>
          <br/><br/>
          </Grid>
          
         <form onSubmit={handleSubmit} >
         <TextField label="name/email" placeholder="Enter username" variant="standard" fullWidth required onChange={handleNameChange} /><br></br>
          <br></br>
          <TextField label="password" placeholder="Enter password" variant="standard" type="password" fullWidth required onChange={handlePasswordChange} />  <br></br>
          {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                 <br></br> 
                 <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign in</Button>
         </form>
                 <br></br>
                 <Typography > Login as Admin ?
                     <Link href="#" >
                        <NavLink to="/login">Sign In</NavLink>
                </Link>
                </Typography>
                 <Typography > Do you have an account ?
                     <Link href="#" >
                        <NavLink to="/signup">Sign Up </NavLink>
                </Link>
                </Typography>
               
        </Paper>
       </Grid>
        
        </>
    )
}

export default Login