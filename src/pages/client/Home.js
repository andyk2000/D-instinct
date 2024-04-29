import React from 'react';
import { Button } from '../../components/Button';
import Board from '../../components/Board';
import './Home.css';
import Promo from '../../components/Promo';
import CarouselPromo from '../../components/CarouselPromo';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className='content'>
      <Board />
      <Promo />
      <CarouselPromo />
      <Footer />
    </div>
  )
}

export default Home;