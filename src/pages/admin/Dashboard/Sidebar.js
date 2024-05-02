import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='side-bar'>
        
        <div className='tab-container' >
          <div className='home-tab'>
            <HomeIcon className='home-icon' />
            <p className='home-label'><Link className='home-txt'>Home</Link></p>
          </div>
          <div className='data-tab'>
            <DataUsageIcon className='data-icon' />
            <p className='data-label'><Link className='data-txt'>Data</Link></p>
          </div>
          <div className='article-tab'>
            <NewspaperIcon className='article-icon' />
            <p className='article-label'><Link className='article-txt'>Data</Link></p>
          </div>
          <div className='payment-tab'>
            <PaymentIcon className='payment-icon' />
            <p className='payment-label'><Link className='payment-txt'>Data</Link></p>
          </div>
        </div>
        <div className='logout-tab'>
            <LogoutIcon className='logout-icon' />
            <p className='logout-label'><Link className='logout-txt'>Data</Link></p>
          </div>
      </div>
  )
}

export default Sidebar