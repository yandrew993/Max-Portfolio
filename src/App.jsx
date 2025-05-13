// Documents\Customer\customer-support-portfolio\src\App.jsx
// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.jsx';
// import About from './components/About/About';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
// import Testimonials from './components/Testimonials/Testimonials';
import Contact from './routes/Contact/Contact.jsx';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main>
              {/* <About /> */}
              <Skills />
              <Experience />
              {/* <Testimonials /> */}
              {/* <Contact /> */}
            </main>
            {/* <Footer /> */}
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;