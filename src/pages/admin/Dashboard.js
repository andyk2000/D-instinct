import React, { useEffect, useState } from 'react';
import Sidebar from './Dashboard/Sidebar';
import "./Dashboard.css";
import SearchIcon from '@mui/icons-material/Search';
import { Bar, Chart } from 'react-chartjs-2'; // Import Bar component from react-chartjs-2
import { UserData } from "../../data/Data";

function Dashboard() {

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main'>
        <div className='nav-bar'>
          <input type='text' placeholder='SEARCH' className='search-bar' />
          <SearchIcon className='search-btn' />
        </div>
        <div className='main-area'>
          <div className='cards'>
            <div className='card-container' >

            </div>
          </div>
          <div className='graph'>
            
          </div>
          <div className='table'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
