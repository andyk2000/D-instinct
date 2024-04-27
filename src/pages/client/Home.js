import React from 'react';
import { Button } from '../../components/Button';
import './Home.css';

function Home() {
  return (
    <div className='content'>
      <div className='promo'>
        <div className='promo-left'>
          <image />
        </div>
        <div className='promo-right'>
          <p className='promo-title'>Birth and Death</p>
          <p className='promo-summary'>Stillbirth affects about 1 in 160 pregnancies each year. A courageous woman share her heart breaking story.</p>
          <div className='promo-red-more'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;