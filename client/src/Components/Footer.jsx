import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright &copy; {currentYear}. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
