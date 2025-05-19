import React from 'react';
import './footer.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h2 className="footer__title">Harmony Webpage</h2>
            <p className="footer__text">
              Delivering exceptional customer experiences with empathy, efficiency, and technical expertise.
            </p>
          </div>
          <div className="footer__socials">
            <h3 className="footer__socials-title">Follow Me</h3>
            <div className="footer__social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Harmo Webpage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;