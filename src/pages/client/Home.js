import React from 'react';
import Board from '../../components/Board';
import Caroussel from '../../components/Caroussel';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Featured from '../../components/Featured';
import ContactUs from '../../components/ContatUs';
import './Home.css';

function Home() {
  return (
    <div className='content'>
      <Navbar />
      <Board />
      <Featured />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;