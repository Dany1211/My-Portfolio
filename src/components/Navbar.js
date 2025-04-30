// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="logo">
          <span className="logo-text">Dnyanesh</span>
          <span className="logo-accent">Mulay</span>
        </Link>

        <div className="nav-links desktop-nav">
          <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`menu-icon ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <Link to="about" smooth={true} duration={500} className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;