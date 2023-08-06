import Img from '../assets/marca-bemol.svg';
import './Header.css';
import React from 'react';

export const Header = () => {

  return (
    <>
      <div className='img_bemol'>
          <img src={Img} alt='bemol-logo'/>
          <p>CONTA BEMOL</p>
      </div>
    </>
  );
}
