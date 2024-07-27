import React from 'react';
import Logo from '../assets/logo.png';
import '../styles/home.css';
import Nav from './Nav';
const Lander = () => {
  return (
    
    <div className="lander-container">
        
      <img src={Logo} alt="logo" className="lander-logo" />
      <p className="lander-text">FIRST OF ITS KIND ECO-FRIENDLY MOBILE DENTAL CLINIC</p>
    </div>
    
  );
};

export default Lander;
