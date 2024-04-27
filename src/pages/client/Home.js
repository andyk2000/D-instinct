import React from 'react';
import { Button } from '../../components/Button';
import Board from '../../components/Board';
import './Home.css';
import Promo from '../../components/Promo';

function Home() {
  return (
    <div className='content'>
      <Board />
      <Promo />
    </div>
  )
}

export default Home;