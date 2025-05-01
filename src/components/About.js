import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/App.css'; 


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container" ref={ref}>
        <motion.div 
          className="about-image"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="image-wrapper">
            <div className="image-placeholder"></div>
            <div className="image-decoration"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="accent-line"></div>
          
          <h3 className="about-subtitle">My Journey</h3>
          
          <p className="about-text">
            I'm a passionate React Native developer specialized in creating cross-platform mobile applications 
            that combine beautiful UIs with exceptional functionality. With expertise in Expo, I build 
            applications that work seamlessly across iOS and Android platforms.
          </p>
          
          <p className="about-text">
            My technical expertise includes developing responsive user interfaces, implementing 
            smooth animations, integrating various APIs, and working with modern database solutions like 
            Firebase and Supabase to create complete, production-ready applications.
          </p>
          
          <p className="about-text">
            I'm dedicated to writing clean, maintainable code and staying updated with the latest 
            trends and best practices in mobile app development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;