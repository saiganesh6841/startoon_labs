
import React, { useDebugValue, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardDetails } from '../redux/action';
import NavbarHeader from './navbar';


const DashboardTable = () => {

  const dispatch = useDispatch();
  const dashboard=useSelector(state => state.data.data)
  console.log(dashboard)

  let token=localStorage.getItem("token")
  // console.log(token)
 

  useEffect(()=>{
     dispatch(fetchDashboardDetails(token))
  },[dispatch])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  return (
    <> <NavbarHeader/>
    <Container maxWidth="md">
        <Paper style={{ marginTop: '20px' }}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead  style={{ backgroundColor: 'lightblue' }}>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Last Login Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboard && dashboard.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{formatDate(row.lastLoginDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
      </Container>
    </>
  );
}

export default DashboardTable;
