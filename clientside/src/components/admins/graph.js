

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardDetails } from '../redux/action';
import Chart from "react-apexcharts";
import NavbarHeader from './navbar';

// import { Line } from 'react-chartjs-2';

const DashboardGraph = () => {
    // const [userData, setUserData] = useState([]);

    const dispatch = useDispatch();
    const userData=useSelector(state => state.data.data)
    let token=localStorage.getItem("token")
//   console.log(token)
 

  useEffect(()=>{
     dispatch(fetchDashboardDetails(token))
  },[dispatch,token])
  console.log(userData)

    // Process data to extract user count for each month
    const getMonthWiseCounts = (data) => {
        const monthCounts = {};

        data.forEach(entry => {
            const month = new Date(entry.lastLoginDate).getMonth() + 1; // JavaScript months are 0-based
            if (monthCounts[month]) {
                monthCounts[month] += entry.count; // Accumulate count for the same month
            } else {
                monthCounts[month] = entry.count;
            }
        });

        return monthCounts;
    };

    const monthWiseCounts = getMonthWiseCounts(userData);

    // Construct series data from monthWiseCounts
    const seriesData = Object.values(monthWiseCounts);

    // Construct categories (months) for x-axis
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const categories = Object.keys(monthWiseCounts).map(month => months[parseInt(month) - 1]);

    const options = {
        chart: {
            type: "bar",
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            title: {
                text: "User Count",
            },
        },
    };

    const series = [{
        name: "User Count",
        data: seriesData,
    }];

    const totalCount = seriesData.reduce((acc, val) => acc + val, 0);
    return (
        <>
        <NavbarHeader></NavbarHeader>
        
        <div style={{display:"flex",justifyContent:"center",justifyContent:"space-around"}}>
                  <div>
                    <h3 style={{backgroundColor:"lightcyan",textAlign:"center"}}>{userData.length}<br />Total user<br/> count</h3>
                </div>
                <div >
                    <h3 style={{backgroundColor:"lightcyan",textAlign:"center"}}>{totalCount}<br />Total click <br/>counts</h3>
                </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        
            <Chart options={options} series={series} type="bar" width="600" />
        </div>
        </>
    );
}
export default DashboardGraph;
