import React, { useEffect, useState } from 'react';
import './Header.scss';
//import profileImage from '../../Assets/images/prof'; // You'll need to add this image
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
              <div className="greeting">Hello, I'm Jane</div>
              <div className="position">Customer Support Specialist</div>
            </h1>
            <p className="header__text">
              Helping businesses deliver exceptional customer experiences
              with empathy, efficiency, and technical expertise.
            </p>
            <div className="header__buttons">
              <Link to="/contact" className="btn btn--primary">
                Contact Me
              </Link>
              <a href="#about" className="btn btn--secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="header__image-section">
            <div className="image-container">
              <img src= './Max.jpg' alt="Jane - Customer Support Specialist" className="profile-image" />
              <div className="background-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;