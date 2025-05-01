// Project.js (Tailwind removed version)

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPills, FaImage, FaSpa, FaComments, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const projectData = [
  {
    id: 1,
    title: "Medicine Tracker",
    description: "An intuitive app to register medicines with time, dosage, and reminders.",
    icon: <FaPills size={24} />,
    tags: ["React Native", "NativeWind", "Firebase"],
    colors: ["#22c55e", "#0ea5e9", "#f97316"],
    githubLink: "https://github.com/Dany1211/Medicine-Tracker",
    image: "https://placehold.co/600x400/e3f2fd/2196f3?text=Medicine+Tracker"
  },
  {
    id: 2,
    title: "Wallpaper App",
    description: "A stunning wallpaper browsing app with search and preview functionality.",
    icon: <FaImage size={24} />,
    tags: ["React Native", "Expo", "NativeWind", "Axios"],
    colors: ["#22c55e", "#6366f1", "#0ea5e9", "#f43f5e"],
    githubLink: "https://github.com/Dany1211/Wallpaper_App",
    image: "https://placehold.co/600x400/e1f5fe/1976d2?text=Wallpaper+App"
  },
  {
    id: 3,
    title: "Meditation App",
    description: "A clean and minimal meditation timer and breathing app.",
    icon: <FaSpa size={24} />,
    tags: ["React Native", "Expo"],
    colors: ["#22c55e", "#6366f1"],
    githubLink: "https://github.com/Dany1211/Meditation-App",
    image: "https://placehold.co/600x400/bbdefb/1565c0?text=Meditation+App"
  },
  {
    id: 4,
    title: "Social Connect",
    description: "A social app with real-time messaging and push notifications.",
    icon: <FaComments size={24} />,
    tags: ["React Native", "Firebase", "WebSockets"],
    colors: ["#22c55e", "#f97316", "#8b5cf6"],
    githubLink: "https://github.com/yourusername/social-connect",
    image: "https://placehold.co/600x400/e6f7ff/0d47a1?text=Social+Connect"
  }
];

const FloatingElement = ({ children, delay = 0, duration = 4 }) => (
  <motion.div
    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration, delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-top-accent"></div>
      <div className="project-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="project-hover-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="project-icon"
          >
            <div className="project-icon-inner">{project.icon}</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="project-tag"
              style={{
                backgroundColor: project.colors[i % project.colors.length],
                boxShadow: `0 4px 6px -1px ${project.colors[i % project.colors.length]}30`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={16} /> View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 15,
    opacity: Math.random() * 0.07 + 0.02
  }));

  return (
    <section className="projects-section">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="floating-bubble"
          style={{ width: bubble.size, height: bubble.size, left: bubble.left, top: bubble.top }}
        >
          <FloatingElement delay={bubble.delay} duration={bubble.duration}>
            <div className="bubble" style={{ opacity: bubble.opacity }} />
          </FloatingElement>
        </div>
      ))}

      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Check out what I've been working on</p>
          <div className="accent-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;