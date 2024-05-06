import React, { useState } from 'react';
import './Signup.css';
import user_icon from '../../images/person.png';
import email_icon from '../../images/email.png';
import password_icon from '../../images/password.png';

function Signup() {
 
    return (
    <div className='container'>
        <div className='header'>
            <div className='header-container'>
                <div className='text'>
                    <div className="text">Sign Up</div>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='User Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className='submit-container'>
                <div className="submit">Sign Up</div>
            </div>
        </div>
    </div>
  )
}
export default Signup;