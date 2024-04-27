import React from 'react';
import { Button } from './Button';
import './Promo.css';

function Promo() {
  return (
    <div className='promo'>
        <div className='promo-left'>
          <img src=''/>
        </div>
        <div className='promo-right'>
          <p className='promo-title'>Birth and Death</p>
          <p className='promo-summary'>Stillbirth is the loss of a baby after 20 weeks of pregnancy. It's a devastating experience for families, affecting about 1 in 160 pregnancies in the US each year. While the cause can be unknown, risk factors include health conditions, infections, and problems with the placenta or umbilical cord. With good prenatal care, some stillbirths can be prevented. There are resources available to help families cope with this loss.</p>
          <div className='promo-read-more'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Read more</Button>
          </div>
        </div>
      </div>
  )
}

export default Promo