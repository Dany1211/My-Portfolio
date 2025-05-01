import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPills, FaImage, FaSpa, FaComments } from 'react-icons/fa';
import '../styles/Projects.css';

const projectData = [
  {
    id: 1,
    title: "Medicine Tracker",
    description: "💊 An intuitive app to register medicines with time, dosage, and reminders. Built using NativeWind and Firebase.",
    tags: ["React Native", "NativeWind", "Firebase"],
    icon: <FaPills size={48} color="#4F46E5" />,
    githubLink: "https://github.com/Dany1211/Medicine-Tracker"
  },
  {
    id: 2,
    title: "Wallpaper App",
    description: "🖼️ A stunning wallpaper browsing app with search and preview built using Expo, Axios, and NativeWind.",
    tags: ["React Native", "Expo", "NativeWind", "Axios"],
    icon: <FaImage size={48} color="#F59E0B" />,
    githubLink: "https://github.com/Dany1211/Wallpaper_App"
  },
  {
    id: 3,
    title: "Meditation App",
    description: "🧘‍♂️ A clean and minimal meditation timer and breathing app made with React Native.",
    tags: ["React Native", "Expo"],
    icon: <FaSpa size={48} color="#10B981" />,
    githubLink: "https://github.com/Dany1211/Meditation-App"
  },
  {
    id: 4,
    title: "Social Connect",
    description: "💬 A social app with real-time messaging, push notifications, and custom profiles using Firebase.",
    tags: ["React Native", "Firebase", "WebSockets"],
    icon: <FaComments size={48} color="#EC4899" />,
    githubLink: "https://github.com/yourusername/social-connect"
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
  };

  return (
    <motion.div 
      className="project-card"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="project-icon">{project.icon}</div>

      <div className="project-info">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="view-project">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="section-title">Featured Projects</h2>
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
