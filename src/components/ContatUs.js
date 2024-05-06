import React from 'react';
import "./ContactUs.css";

function ContatUs() {
  return (
    <div className='contact-us'>
        <div className='info'>
            <div className='email'>
                <p className='email-label'>EMAIL</p>
                <input className="email-input"/>
            </div>
            <div className='subject'>
                <p className='subject-label'>SUBJECT</p>
                <input className="subject-input"/>
            </div>
        </div>
        <div className='message'>
            <p className='message-label'>MESSAGE</p>
            <textarea className='message-input'/>
        </div>
        <button className='send'>SUBMIT</button>
    </div>
  )
}

export default ContatUs;