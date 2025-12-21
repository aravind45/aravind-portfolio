import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      institution: "University Name",
      duration: "2020 - 2022",
      description: "Specialized in software engineering, algorithms, and data structures. Completed thesis on distributed systems and cloud computing.",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor's Degree",
      field: "Information Technology",
      institution: "University Name",
      duration: "2016 - 2020",
      description: "Strong foundation in programming, database management, and web development. Graduated with honors and participated in various coding competitions.",
      gpa: "3.7/4.0"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <h3>{edu.degree}</h3>
                    <span className="gpa">{edu.gpa}</span>
                  </div>
                  <h4>{edu.field}</h4>
                  <div className="institution-info">
                    <div className="institution">
                      <FaUniversity />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="duration">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;