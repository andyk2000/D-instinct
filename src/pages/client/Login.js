import React, { useState } from 'react';
import './Login.css';
import user_icon from '../../images/person.png';
import email_icon from '../../images/email.png';
import password_icon from '../../images/password.png';

function Login() {
 
    return (
    <div className='container'>
        <div className='header'>
            <div className='header-container'>
                <div className='text'>
                    <div className="text">Login</div>
                </div>
            </div>
            <div className='inputs'>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className='forgot-password'>Forgot Passowrd? <span>Click Here!</span></div>
            <div className='submit-container'>
                <div className="submit">Sign Up</div>
            </div>
        </div>
    </div>
  )
}
export default Login;