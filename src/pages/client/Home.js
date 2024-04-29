import React from 'react';
import { Button } from '../../components/Button';
import Board from '../../components/Board';
import './Home.css';
import Promo from '../../components/Promo';
import CarouselPromo from '../../components/CarouselPromo';

function Home() {
  return (
    <div className='content'>
      <Board />
      <Promo />
      <CarouselPromo />
    </div>
  )
}

export default Home;