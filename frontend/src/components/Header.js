import Img from '../assets/bemol-logo.png';
import './Header.css';
import React from 'react';

export const Header = () => {

  return (
    <>
      <div className='img_bemol'>
          <img src={Img} alt='bemol-logo'/>
          <p>AUTO-SCREWING</p>
      </div>
    </>
  );
}
