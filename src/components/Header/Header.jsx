import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className={`header__content ${isLoaded ? 'loaded' : ''}`}>
          <div className="header__text-section">
            <h1 className="header__title">
              <div className="greeting">Hello, I'm Harmony</div>
              <div className="position">Software Engineer</div>
            </h1>
            <p className="header__text">
              Building innovative solutions to solve real-world problems
              with creativity, precision, and technical expertise.
            </p>
            <div className="header__buttons">
              <Link to="/contact" className="btn btn--primary">
                Contact Me
              </Link>
              <div className="resume-download">
                <a 
                  href="/Harmony.pdf" 
                  download="Harmony_Resume.pdf" 
                  className="btn btn--primary"
                >
                My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="header__image-section">
            <div className="image-container">
              <img src='./Harmony.jpeg' alt="Harmony - Software Engineer" className="profile-image" />
              <div className="background-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;