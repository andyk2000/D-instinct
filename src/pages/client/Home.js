import React from 'react';
import Board from '../../components/Board';
import './Home.css';
import Promo from '../../components/Promo';
import CarouselPromo from '../../components/CarouselPromo';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <div className='content'>
      <Navbar />
      <Board />
      <Promo />
      <CarouselPromo />
      <Footer />
    </div>
  )
}

export default Home;