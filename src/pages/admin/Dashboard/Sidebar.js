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
      <div className='Admin-frame'>
        <p className='wlc'> Welcome back!</p>
      </div>
      <div className='tab-container'>
        <div className='home-tab'>
          <HomeIcon className='home-icon' />
          <p className='home-label'><Link to='/dashboard' className='home-txt'>Home</Link></p>
        </div>
        <div className='data-tab'>
          <DataUsageIcon className='data-icon' />
          <p className='data-label'><Link to='/data' className='data-txt'>Data</Link></p>
        </div>
        <div className='article-tab'>
          <NewspaperIcon className='article-icon' />
          <p className='article-label'><Link to='/articles' className='article-txt'>Articles</Link></p>
        </div>
        <div className='payment-tab'>
          <PaymentIcon className='payment-icon' />
          <p className='payment-label'><Link to='/payment' className='payment-txt'>Payment</Link></p>
        </div>
      </div>
      <div className='logout-tab'>
        <LogoutIcon className='logout-icon' />
        <p className='logout-label'><Link to='/' className='logout-txt'>Logout</Link></p>
      </div>
    </div>
  );
}

export default Sidebar;
