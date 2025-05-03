// Make sure your Projects component has the proper ID
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import '../styles/Projects.css'

// Project Data (keeping the same data)
const projectData = [
  {
    id: 1,
    title: "Medicine Tracker",
    description: "An intuitive app to register medicines with time, dosage, and reminders.",
    tags: ["React Native", "NativeWind", "Firebase"],
    githubLink: "https://github.com/Dany1211/Medicine-Tracker",
    image: "https://placehold.co/600x400/f8fafc/64748b?text=Medicine+Tracker"
  },
  {
    id: 2,
    title: "Wallpaper App",
    description: "A stunning wallpaper browsing app with search and preview functionality.",
    tags: ["React Native", "Expo", "NativeWind", "Axios"],
    githubLink: "https://github.com/Dany1211/Wallpaper_App",
    image: "https://placehold.co/600x400/f8fafc/64748b?text=Wallpaper+App"
  },
  {
    id: 3,
    title: "Meditation App",
    description: "A clean and minimal meditation timer and breathing app.",
    tags: ["React Native", "Expo"],
    githubLink: "https://github.com/Dany1211/Meditation-App",
    image: "https://placehold.co/600x400/f8fafc/64748b?text=Meditation+App"
  },
  {
    id: 4,
    title: "Social Connect",
    description: "A social app with real-time messaging and push notifications.",
    tags: ["React Native", "Firebase", "WebSockets"],
    githubLink: "https://github.com/yourusername/social-connect",
    image: "https://placehold.co/600x400/f8fafc/64748b?text=Social+Connect"
  }
];

// Modern Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="project-card"
    >
      <div className="card-image-container">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="card-image"
        />
        
        <div className="card-tag-overlay">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="card-tag">{tag}</span>
          ))}
          {project.tags.length > 2 && <span className="card-tag">+{project.tags.length - 2}</span>}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        
        <div className="card-actions">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button primary"
          >
            <FaEye /> View Project
          </motion.a>
          
          <div className="card-links">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-icon-button"
              aria-label="View GitHub repository"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="card-icon-button"
              aria-label="View live project"
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Mobile Carousel Component
const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      goToNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swiped right
      goToPrev();
    }
  };

  const project = projectData[currentIndex];

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="carousel-card"
        >
          <div className="carousel-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="carousel-image"
            />
            
            <div className="carousel-tag-container">
              {project.tags.map((tag, i) => (
                <span key={i} className="carousel-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="carousel-content">
            <h3 className="carousel-title">{project.title}</h3>
            <p className="carousel-description">{project.description}</p>
            
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-button"
            >
              <FaEye /> View Project
            </a>
            
            <div className="carousel-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-icon-link"
              >
                <FaGithub />
              </a>
              
              <a
                href="#"
                className="carousel-icon-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <button 
        onClick={goToPrev}
        className="carousel-nav prev"
        aria-label="Previous project"
      >
        <FaChevronLeft />
      </button>
      
      <button 
        onClick={goToNext}
        className="carousel-nav next"
        aria-label="Next project"
      >
        <FaChevronRight />
      </button>
      
      <div className="carousel-indicators">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Floating Icon Component
const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className={`floating-icon icon-${i % 5}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Main Projects Component
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="projects" className="projects-section"> {/* Added explicit ID here */}
      <FloatingIcons />
      
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Featured Projects
            <span className="title-accent"></span>
          </h2>
          <p className="section-subtitle">Explore my latest work and see what I've been building</p>
        </motion.div>
        
        {isMobile ? (
          <ProjectCarousel />
        ) : (
          <div className="projects-grid">
            {projectData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;