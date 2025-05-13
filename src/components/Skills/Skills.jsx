import React, { useEffect, useRef, useState } from 'react';
import './Skills.scss';

// Skill categories with icons
const skillCategories = [
  {
    title: "Customer Support",
    icon: "💬",
    skills: [
      { name: 'Customer Service', level: 95, description: 'Exceptional service with 95% customer satisfaction rate' },
      { name: 'Problem Solving', level: 85, description: 'Resolving complex customer issues effectively' },
      { name: 'Conflict Resolution', level: 88, description: 'De-escalating tense situations with empathy' },
    ]
  },
  {
    title: "Technical Skills",
    icon: "⚙️",
    skills: [
      { name: 'Zendesk', level: 92, description: 'Expert in ticket management and automation' },
      { name: 'Salesforce', level: 78, description: 'CRM data management and reporting' },
      { name: 'LiveChat', level: 85, description: 'Real-time customer assistance specialist' },
    ]
  },
  {
    title: "Professional Skills",
    icon: "📊",
    skills: [
      { name: 'Communication', level: 90, description: 'Clear and effective written and verbal skills' },
      { name: 'Time Management', level: 82, description: 'Efficiently handling multiple priorities' },
      { name: 'Team Collaboration', level: 86, description: 'Working effectively across departments' },
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Expertise & Proficiency</h2>
        
        <div className={`skills__categories ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skills__category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category__header">
                <span className="category__icon">{category.icon}</span>
                <h3 className="category__title">{category.title}</h3>
              </div>
              
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3}s` }}
                  >
                    <div className="skill__info">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill__bar">
                      <div 
                        className={`skill__progress ${isVisible ? 'animate' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      ></div>
                    </div>
                    
                    <div className="skill__tooltip">
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`skills__highlight ${isVisible ? 'visible' : ''}`}>
          <div className="highlight__content">
            <span className="highlight__icon">🚀</span>
            <p>A passionate customer advocate with the technical skills to match.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;