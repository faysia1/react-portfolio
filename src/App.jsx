import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './elements/Header';
import AboutMe from './elements/AboutMe';
import Portfolio from './elements/Portfolio';
import Contact from './elements/Contact';
import Resume from './elements/Resume';
import Footer from './elements/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
