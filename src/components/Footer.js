import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-part1'>
            <div className='footer-logo'>
                <Link className='footer-logo-img'>D-INSTINCT</Link>
            </div>
            <div className='footer-col'>
                <h1>ABOUT</h1>
                <Link className='footer-element-1'>BODY</Link>
                <Link className='footer-element-1'>SPIRIT</Link>
                <Link className='footer-element-1'>SOUL</Link>
                <Link className='footer-element-1'>SOCIETY</Link>
            </div>
            <div className='footer-col'>
                <h1>CONTACT</h1>
                <Link className='footer-element-1'>diane@gmail.com</Link>
                <Link className='footer-element-1'>(+250)780000000</Link>
            </div>
            <div className='footer-col'>
                <h1>SOCIAL MEDIA</h1>
                <Link className='footer-element-1'>
                    <LinkedInIcon />
                    DianeUwamariya</Link>
                <Link className='footer-element-1'>
                    <InstagramIcon />
                    DianeUwamariya</Link>
                <Link className='footer-element-1'>
                    <FacebookIcon />
                    DianeUwamariya</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;