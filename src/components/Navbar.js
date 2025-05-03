// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'; // Added FaHome icon
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

  // Map navigation items with their icons
  const navItems = [
    { name: 'hero', displayName: 'Home', icon: <FaHome /> },
    { name: 'about', icon: <FaUser /> },
    { name: 'projects', icon: <FaCode /> },
    { name: 'contact', icon: <FaEnvelope /> }
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const mobileNavVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="logo">
          <motion.span 
            className="logo-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dnyanesh
          </motion.span>
          <motion.span 
            className="logo-accent"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mulay
          </motion.span>
        </Link>

        <div className="nav-links desktop-nav">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link 
                to={item.name} 
                spy={true}
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="nav-link"
                activeClass="active"
              >
                <span className="nav-icon">{item.icon}</span>
                {item.displayName || item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="menu-toggle-container">
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle navigation"
          >
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-nav"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileNavVariants}
            >
              <div className="mobile-nav-content">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={mobileNavItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      to={item.name} 
                      spy={true}
                      smooth={true} 
                      offset={-70}
                      duration={500} 
                      className="mobile-nav-link" 
                      activeClass="active"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      {item.displayName || item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;