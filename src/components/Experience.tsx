import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 100K+ daily active users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      duration: "2020 - 2022",
      type: "Full-time",
      description: [
        "Developed and maintained web applications using React and Express.js",
        "Optimized database queries improving application performance by 40%",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redis", "Stripe"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Austin, TX",
      duration: "2019 - 2020",
      type: "Full-time",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect UI/UX designs",
        "Improved website loading speed by 50% through optimization techniques",
        "Maintained and updated existing client websites"
      ],
      technologies: ["Vue.js", "JavaScript", "CSS3", "Webpack", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Remote",
      duration: "2018 - 2019",
      type: "Internship",
      description: [
        "Assisted in developing web applications using HTML, CSS, and JavaScript",
        "Learned modern development practices and version control with Git",
        "Contributed to open-source projects and gained hands-on experience",
        "Participated in daily standups and team collaboration"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="job-info">
                      <h3>{exp.title}</h3>
                      <div className="company-info">
                        <div className="company">
                          <FaBuilding />
                          <span>{exp.company}</span>
                        </div>
                        <div className="location">
                          <FaMapMarkerAlt />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="job-meta">
                      <div className="duration">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="job-description">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="job-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;