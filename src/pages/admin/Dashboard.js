import React from 'react';
import Sidebar from './Dashboard/Sidebar';
import "./Dashboard.css";
import SearchIcon from '@mui/icons-material/Search';

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

        </div>
      </div>
    </div>
  )
}

export default Dashboard;