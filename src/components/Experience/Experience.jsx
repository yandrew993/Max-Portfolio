import React from 'react';
import './Experience.scss';

const experiences = [
  {
    id: 1,
    company: 'SHOFCO',
    position: 'IT Support Intern',
    period: 'May 2024 – August 2025',
    responsibilities: [
      'Remote IT Monitoring',
      'Applications Development',
      'User training and support on technical requests',
      'User training on cybersecurity measures',
      'Smart device installations',
    ],
  },
  {
    id: 2,
    company: 'Sony Sugar Company',
    position: 'Technical Support Intern',
    period: 'May 2023 - August 2023',
    responsibilities: [
      'Installed and configured hardware and software systems, ensuring optimal performance and seamless integration across various platforms.',
      'Diagnosed and resolved computer network issues, leveraging troubleshooting skills to maintain uninterrupted connectivity and system functionality.',
      'Implemented network security controls, including firewall configurations and access restrictions, to safeguard organizational data and systems against potential threats.',
      'Conducted mentorship sessions for employees, fostering interest in technology and guiding them in foundational IT concepts.',
      'Managed and maintained the organization’s database, ensuring data integrity, accessibility, and security compliance.',
      'Delivered IT training sessions to the company\'s high school form-four leavers, equipping them with essential computer skills.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline__item">
              <div className="timeline__content">
                <h3 className="timeline__title">{exp.position}</h3>
                <h4 className="timeline__company">{exp.company}</h4>
                <span className="timeline__period">{exp.period}</span>
                <ul className="timeline__responsibilities">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;