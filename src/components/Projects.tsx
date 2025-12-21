import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/aravind45/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/aravind45/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com/aravind45/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      image: "🌤️"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Celery"],
      githubUrl: "https://github.com/aravind45/social-analytics",
      liveUrl: "https://analytics-demo.vercel.app",
      image: "📊"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption for secure communication.",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "JWT"],
      githubUrl: "https://github.com/aravind45/chat-app",
      liveUrl: "https://chat-demo.vercel.app",
      image: "💬"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and TypeScript, featuring smooth animations, dark mode, and optimized performance.",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3"],
      githubUrl: "https://github.com/aravind45/portfolio",
      liveUrl: "https://aravind-portfolio.vercel.app",
      image: "🎨"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Building
        </motion.h2>
        
        <motion.div 
          className="github-link-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="section-description">
            Check out my latest projects and contributions on GitHub
          </p>
          <a 
            href="https://github.com/aravind45" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <FaGithub />
            View My GitHub Profile
          </a>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaCode /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaRocket /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;