import React, { useEffect, useRef, useState } from 'react';
import './Skills.scss';

// Skill categories with icons
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: 'JavaScript', level: 95, description: 'Expert in modern JavaScript (ES6+), including frameworks like React and Node.js' },
      { name: 'Python', level: 90, description: 'Proficient in Python for web development, data analysis, and scripting' },
      { name: 'Java', level: 85, description: 'Experienced in building robust backend systems and APIs' },
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: 'React', level: 92, description: 'Building dynamic and responsive user interfaces' },
      { name: 'HTML & CSS', level: 95, description: 'Expert in semantic HTML and modern CSS techniques (Flexbox, Grid)' },
      { name: 'TypeScript', level: 85, description: 'Strong understanding of static typing for scalable frontend applications' },
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: 'Node.js', level: 90, description: 'Building scalable server-side applications and RESTful APIs' },
      { name: 'Express.js', level: 88, description: 'Efficient in creating middleware and routing for web applications' },
      { name: 'SQL & Databases', level: 85, description: 'Proficient in MySQL, PostgreSQL, and database design' },
    ]
  },
  // {
  //   title: "DevOps & Tools",
  //   icon: "🚀",
  //   skills: [
  //     { name: 'Git & GitHub', level: 95, description: 'Version control and collaborative development' },
  //     { name: 'Docker', level: 80, description: 'Containerization for consistent development and deployment' },
  //     { name: 'CI/CD', level: 85, description: 'Automating builds, tests, and deployments with tools like Jenkins and GitHub Actions' },
  //   ]
  // }
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
            <span className="highlight__icon">🌟</span>
            <p>A passionate software engineer dedicated to crafting innovative and scalable solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;