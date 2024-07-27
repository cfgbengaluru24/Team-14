import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-brand">
          <h1 className="nav-title">Rohini Foundation</h1>
          <p className="nav-subtitle">Right to Oral Healthy Society</p>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/Success" className="nav-link">Testimonials</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <Link to="/Donate"><button className="nav-donate">Donate Now</button></Link>
        <button className="nav-toggle" onClick={toggleMenu}>
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="nav-mobile-menu">
          <Link to="/" className="nav-mobile-link">Home</Link>
          <Link to="/about-us" className="nav-mobile-link">About Us</Link>
          <Link to="/projects" className="nav-mobile-link">Projects</Link>
          <Link to="/gallery" className="nav-mobile-link">Gallery</Link>
          <Link to="/testimonials" className="nav-mobile-link">Testimonials</Link>
          <Link to="/contact" className="nav-mobile-link">Contact</Link>
          <button className="nav-mobile-donate">Donate Now</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;

