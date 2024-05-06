import React from 'react';
import Board from '../../components/Board';
import './Home.css';
import CarouselPromo from '../../components/CarouselPromo';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Featured from '../../components/Featured';
import ContactUs from '../../components/ContatUs';

function Home() {
  return (
    <div className='content'>
      <Navbar />
      <Board />
      <Featured />
      <CarouselPromo />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;