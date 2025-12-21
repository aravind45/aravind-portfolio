import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="home-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Aravind Thiyagarajan</span>
          </motion.h1>
          
          <motion.p 
            className="home-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & Software Engineer
          </motion.p>
          
          <motion.p 
            className="home-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative solutions and building scalable applications 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </motion.p>
          
          <motion.div 
            className="home-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope /> Get In Touch
            </a>
            <a href="/resume.pdf" className="btn btn-secondary" download>
              <FaDownload /> Download CV
            </a>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/aravind45" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/aravind-thiyaga" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:aravind45@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="profile-card">
            <div className="profile-img">
              <div className="avatar-placeholder">AT</div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">💻</div>
              <div className="floating-element element-2">🚀</div>
              <div className="floating-element element-3">⚡</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;