// src/components/Experience/Experience.jsx
import React from 'react';
import './Experience.scss';

const experiences = [
  {
    id: 1,
    company: 'Lawton Lighthouse.',
    position: 'Customer Support Director Apprentice',
    period: 'May 2023 - Present',
    responsibilities: [
      ' Develop team training programs that enhance skill proficiency and elevate performance outcomes',
      'Cultivate client relationships, fostering loyalty and facilitating revenue expansion via effective CRM utilization',
      'Assess customer interactions to confirm adherence to quality benchmarks, offering constructive feedback for service enhancement.',
    ],
  },
  {
    id: 2,
    company: 'Majorel',
    position: 'Customer Service Representative',
    period: '2017 - 2020',
    responsibilities: [
      ' Delivered informed and comprehensive assistance to customers by leveraging extensive product knowledge, aligning with client communication standards',
      ' Fostered customer loyalty by providing tailored support and effectively resolving issues, enhancing client trust and satisfaction.',
      ' Cooperated with remote colleagues to improve customer service procedures, achieving team performance targets and contributing to a 15% decrease in customer inquiry response times.',
    ],
  },
  {
    id: 3,
    company: 'Bubbly Management Group',
    position: 'Customer Support Team Lead',
    period: '2017 - 2020',
    responsibilities: [
      ' Addressed intricate customer inquiries, achieving substantial satisfaction levels via adept communication and prioritizing critical issues.',
      ' Enhanced team performance by creating thorough procedural guides and conducting training sessions to bolster operational practices.',
      "Drove a 25% enhancement in team's operational efficiency by implementing and refining process improvements.",
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