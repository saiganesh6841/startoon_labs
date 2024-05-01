
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Link, Paper, Radio, RadioGroup, TextField, Typography } from "@material-ui/core"
// import { NavLink } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from "axios";
import { baseUrl } from "../../App";


const Register=()=>{

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
          name: name,
          email: email,
          password: password,
          gender: gender
      };
      try {
          const response = await axios.post(`${baseUrl}/user/signup`, formData);
          console.log(response.data); 
          alert(response.data.message)
          navigate("/profile")
      } catch (error) {
        //   console.error('Error:', error);
          console.log(error)
          alert(error.response.data.error)
      }
  };

  const paperStyle = {padding :20,height:"65vh",width:400 , margin:"90px auto"}
    const marginTop = { marginTop: 5 }
     const nameStyle = {display: "inline",color: "red",fontSize: "44px",flexGrow: 1,background: "linear-gradient(135deg, #A80306, #E57E75)",WebkitBackgroundClip: "text",backgroundClip: "text",color: "transparent"};
    return(
        <>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                {/* <h2 style={nameStyle}>Touch</h2> */}
                    {/* <Avatar style={avatarStyle}>
                   
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar> */}
                    <h2 style={nameStyle}>Sign Up</h2>
                    <br/>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}  />
                    <TextField fullWidth label='Email' placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    
                   
                    <TextField fullWidth label='Password' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}  style={{ flexDirection: 'row' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                             <FormControlLabel value="male" control={<Radio />} label="Male" />
                       </RadioGroup>
                    </FormControl>
                    
                    <br></br>
                    <Button type='submit' variant='contained' color='primary' >
                   Sign Up
          
                    </Button>
                </form>
                <Typography >Already have an account?
                     <Link href="#" >
                        <NavLink to="/">Sign In </NavLink>
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </>
    )
}

export default Register;