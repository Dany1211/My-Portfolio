import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const features = [
    {
      title: "Mobile Development",
      description: "Cross-platform apps with React Native for iOS and Android.",
      icon: <MobileIcon />
    },
    {
      title: "AI Integration",
      description: "Smart features with Gemini, ChatGPT and other AI APIs.",
      icon: <AIIcon />
    },
    {
      title: "Full-Stack",
      description: "End-to-end solutions with robust backends and APIs.",
      icon: <CodeIcon />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces with seamless flows.",
      icon: <DesignIcon />
    }
  ];

  const techStacks = [
    { category: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "Flask"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] }
  ];

  return (
    <section id="about" className="about-section">
      <div className={`about-container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="about-content">
          <div className="header-center">
            <h2 className="section-title">About Me</h2>
            <div className="accent-line"></div>
          </div>
          
          <h3 className="about-subtitle">Full-Stack Developer</h3>
          
          <p className="about-text">
            I build <span className="highlight">mobile and web applications</span> that deliver exceptional user experiences. 
            With expertise across the stack, I create solutions that solve real problems using 
            modern technologies like <span className="highlight">React Native</span>, <span className="highlight">Node.js</span>, 
            and <span className="highlight">AI integrations</span>.
          </p>

          <div className="feature-cards">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="tech-stack-wrapper">
            <h4 className="tech-stack-title">
              <GearIcon />
              Tech Stack
            </h4>
            <div className="tech-stack-grid">
              {techStacks.map((stack, index) => (
                <div key={index} className="tech-stack-category">
                  <h5 className="tech-category-title">{stack.category}</h5>
                  <div className="tech-tags">
                    {stack.items.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        style={{ animationDelay: `${1 + index * 0.1 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a8 8 0 0 0-8 8v1h16v-1a8 8 0 0 0-8-8z"></path>
    <path d="M4 15v3a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-3"></path>
    <line x1="12" y1="16" x2="12" y2="13"></line>
    <line x1="8" y1="16" x2="8" y2="13"></line>
    <line x1="16" y1="16" x2="16" y2="13"></line>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gear-icon">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

export default About;