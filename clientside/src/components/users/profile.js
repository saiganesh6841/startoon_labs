import { Avatar, Button, Card, CardContent, Container, Grid, TextField, Typography } from "@material-ui/core"
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../App";




const ProfileDetails=()=>{

  const [userData, setUserData] = useState(null);
    const token = localStorage.getItem("TOKEN");

    useEffect(() => {
        const fetchProfileDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data)
                setUserData(response.data.userDetails);
                
            } catch (error) {
                console.error("Error fetching profile details:", error);
            }
        };

        fetchProfileDetails();
    }, [token]);


    return(
        <>
         <Container maxWidth="md">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} style={{marginTop:"30px"}}>
                    <Typography variant="h4" align="center">Profile Details</Typography>
                </Grid>
                {userData && (
                    <Grid item xs={12} md={6} style={{marginTop:"70px",backgroundColor:"whitesmoke"}}>
                        <Card>
                            <CardContent>
                              <center>
                                <Avatar alt="User Avatar" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&ga=GA1.1.1415618206.1707587860&semt=sph" sx={{ width: 100, height: 100, margin: '0 auto',marginBottom: 16 }} /></center>
                                <Typography variant="body1"><strong>Name:</strong> {userData.name}</Typography>
                                <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
                                <Typography variant="body1"><strong>Gender:</strong> {userData.gender}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
        </>
    )
}

export default ProfileDetails