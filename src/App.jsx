// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router basename="portfolio-resume">
      <Navbar />
      <Routes>
        {/* Every Route must have BOTH a `path` AND an `element` */}
        <Route path="/"        element={<Home />}      />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume"    element={<Resume />}    />
        <Route path="/contact"   element={<Contact />}   />
      </Routes>
    </Router>
  );
}
