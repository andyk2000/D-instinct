import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-part1'>
            <div className='footer-logo'>
                <Link >D-INSTINCT</Link>
            </div>
            <div className='footer-col1'>
                <h1>ABOUT</h1>
                <Link>BODY</Link>
                <Link>SPIRIT</Link>
                <Link>SOUL</Link>
                <Link>SOCIETY</Link>
            </div>
            <div className='footer-col2'>
                <h1>CONTACT</h1>
                <Link>diane@gmail.com</Link>
                <Link>(+250)780000000</Link>
            </div>
            <div className='footer-col3'>
                <h1>SOCIAL MEDIA</h1>
                <Link>DianeUwamariya</Link>
                <Link>DianeUwamariya</Link>
                <Link>DianeUwamariya</Link>
                <Link>DianeUwamariya</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;