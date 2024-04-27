import React from 'react';
import { Button } from '../../components/Button';
import './Home.css';

function Home() {
  return (
    <div className='board'>
        <div className='board-left'>
            <p className='title-cover'>Ask for what you want and be prepared to get it!</p>
            <p className='author'>By Diane U   wamariya</p>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SUBSCRIBE</Button>
        </div>
        <div className='board-right'>
            <p>right</p>
        </div>
    </div>
  )
}

export default Home;