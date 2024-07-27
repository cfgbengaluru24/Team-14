import React from 'react';
import '../styles/Footer.css';;
import '../styles/home.css';

const data = [
  { title: "Solutions", list: ["Marketing", "Analytics", "Commerce", "Insights"] },
  { title: "Support", list: ["Pricing", "Documentation", "Guides", "API Status"] },
  { title: "Company", list: ["About", "Blog", "Jobs", "Press", "Partners"] },
  { title: "Legal", list: ["Claim", "Privacy", "Terms of Use"] },
];

const Footer = ({ theme = "dark" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`footer-container ${theme}`}>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-description">
            Making the world a better place through constructing elegant hierarchies.
          </div>
          <div className="footer-social">
            <span className="social-icon facebook"></span>
            <span className="social-icon twitter"></span>
            <span className="social-icon github"></span>
            <span className="social-icon youtube"></span>
            <span className="social-icon instagram"></span>
          </div>
        </div>
        <div className="footer-links">
          {data.map(({ title, list }, idx) => (
            <div key={idx} className="footer-section">
              <h5 className={`footer-title ${theme}`}>{title}</h5>
              <ul className="footer-list">
                {list.map((item, idx) => (
                  <li key={idx} className="footer-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`footer-bottom ${theme}`}>
        &copy; {{currentYear}} Your Company, Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
