import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer'; // Import the Footer component

const Contact = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);
  
  const phoneNumber = '+254113069867';
  const emailAddress = 'harmonyokoth@gmail.com';
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}`, '_blank');
  };
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  
  return (
    <div className={`contact-page ${pageLoaded ? 'loaded' : ''}`}>
      <div className="contact-page__hero">
        <div className="container">
          <Link to="/" className="back-link">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          
          <div className="hero-content">
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">
              I'm always interested in discussing with clients on how to solve real world problems and how I can help improve your user experience.
            </p>
          </div>
        </div>
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>
      
      <div className="contact-page__main">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-card">
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  Need to discuss a customer support role or have questions about my experience? 
                  Feel free to reach out through any of these channels.
                </p>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>San Francisco, California</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="social-link">
                    <FaPhone />
                  </a>
                  <a href="#" className="social-link">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-actions-container">
              <h2>Connect With Me</h2>
              <p className="action-intro">Choose how you'd like to reach out:</p>
              
              <div className="contact-actions">
                <button 
                  className="contact-action-btn whatsapp-btn"
                  onClick={handleWhatsAppClick}
                >
                  <div className="btn-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Let's Chat</span>
                    <span className="btn-subtitle">Message me on WhatsApp</span>
                  </div>
                </button>
                
                <button 
                  className="contact-action-btn call-btn"
                  onClick={handleCallClick}
                >
                  <div className="btn-icon">
                    <FaPhone />
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Call Me</span>
                    <span className="btn-subtitle">Direct phone conversation</span>
                  </div>
                </button>
                
                <button 
                  className="contact-action-btn email-btn"
                  onClick={handleEmailClick}
                >
                  <div className="btn-icon">
                    <FaEnvelope />
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Email Me</span>
                    <span className="btn-subtitle">Send a detailed message</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Contact;