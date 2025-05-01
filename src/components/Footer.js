import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© {new Date().getFullYear()} Dnyanesh Mulay. All rights reserved.</p>
        <p className="footer-tagline">React Native Developer</p>
      </div>
    </footer>
  );
};

export default Footer;