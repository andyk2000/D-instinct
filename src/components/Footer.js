import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../images/Logo-letters.png";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <Link className='footer-logo'>
                <img src={logo} alt="" className='logo'/>
            </Link>
            <div className='footer-col'>
                <h3>ABOUT</h3>
                <Link className='footer-element-1'>BODY</Link>
                <Link className='footer-element-1'>SPIRIT</Link>
                <Link className='footer-element-1'>SOUL</Link>
                <Link className='footer-element-1'>SOCIETY</Link>
            </div>
            <div className='footer-col'>
                <h3>CONTACT</h3>
                <Link className='footer-element-1'>diane@gmail.com</Link>
                <Link className='footer-element-1'>(+250)780000000</Link>
            </div>
            <div className='footer-col'>
                <h3>SOCIAL MEDIA</h3>
                <Link className='footer-element-1'>
                    <LinkedInIcon className='icon'/>
                    <p>DianeUwamariya</p></Link>
                <Link className='footer-element-1'>
                    <InstagramIcon className='icon'/>
                    <p>DianeUwamariya</p></Link>
                <Link className='footer-element-1'>
                    <FacebookIcon className='icon'/>
                    <p>DianeUwamariya</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;