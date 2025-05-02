import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import heroImg from '../assets/heroImg.jpg';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check if viewport is mobile width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      hero.style.setProperty('--mouse-x', x);
      hero.style.setProperty('--mouse-y', y);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Tech stack items with icons
  const techStack = [
    { name: 'React Native', icon: '📱' },
    { name: 'AI Integration', icon: '🧠' },
    { name: 'Database', icon: '🗄️' },
    { name: 'UI/UX', icon: '🎨' }
  ];

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-element" style={{ top: '15%', left: '10%' }}></div>
        <div className="floating-element" style={{ top: '75%', left: '15%' }}></div>
        <div className="floating-element" style={{ top: '20%', right: '15%' }}></div>
        <div className="floating-element" style={{ top: '65%', right: '10%' }}></div>
      </div>
      
      <div className="hero-container">
        {/* For mobile view, we'll swap the order of elements */}
        {isMobile ? (
          <>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="profile-frame">
                <div className="profile-photo">
                  <img src={heroImg} alt="Dnyanesh - App Developer" className="hero-photo" />
                </div>
                <div className="profile-frame-accent"></div>
              </div>
              <div className="blob-background"></div>
            </motion.div>
            
            <div className="hero-content">
              <motion.div 
                className="title-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <span>Available for Projects</span>
              </motion.div>
              
              {/* Rest of content */}
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7 }}
              >
                Hi, I'm <span className="accent-text">Dnyanesh</span>
              </motion.h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="highlight">App Developer</span> & <span className="highlight">React Native</span> Expert
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                I craft polished cross-platform mobile applications with <span className="accent-text">AI-powered</span> features 
                that deliver exceptional user experiences and transform ideas into reality.
              </motion.p>
              
              <motion.div 
                className="tech-stack" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={tech.name} 
                    className="tech-pill"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Link to="projects" smooth={true} duration={500} className="btn-primary">
                  View My Work
                  <span className="btn-icon">→</span>
                </Link>
                <Link to="contact" smooth={true} duration={500} className="btn-secondary">
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Desktop layout remains the same */}
            <div className="hero-content">
              <motion.div 
                className="title-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <span>Available for Projects</span>
              </motion.div>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7 }}
              >
                Hi, I'm <span className="accent-text">Dnyanesh</span>
              </motion.h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="highlight">App Developer</span> & <span className="highlight">React Native</span> Expert
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                I craft polished cross-platform mobile applications with <span className="accent-text">AI-powered</span> features 
                that deliver exceptional user experiences and transform ideas into reality.
              </motion.p>
              
              <motion.div 
                className="tech-stack" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={tech.name} 
                    className="tech-pill"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Link to="projects" smooth={true} duration={500} className="btn-primary">
                  View My Work
                  <span className="btn-icon">→</span>
                </Link>
                <Link to="contact" smooth={true} duration={500} className="btn-secondary">
                  Contact Me
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="profile-frame">
                <div className="profile-photo">
                  <img src={heroImg} alt="Dnyanesh - App Developer" className="hero-photo" />
                </div>
                <div className="profile-frame-accent"></div>
              </div>
              <div className="blob-background"></div>
            </motion.div>
          </>
        )}
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;