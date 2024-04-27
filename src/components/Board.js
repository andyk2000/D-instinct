import React from 'react';
import { Button } from './Button';
import './Board.css';

function Board() {
  return (
    <div className='board'>
        <div className='board-left'>
          <div className='board-left-container'>
            <p className='title-cover'>Ask for what you want and be prepared to get it!</p>
            <p className='author'>By Diane U   wamariya</p>
            <div className='button'>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SUBSCRIBE</Button>
            </div>
          </div>
        </div>
        <div className='board-right'>
            <div className='pic-frame'>
              <img />
            </div>
        </div>
      </div>
  )
}

export default Board;