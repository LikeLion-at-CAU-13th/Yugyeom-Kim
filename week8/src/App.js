import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Introduce from './components/Introduce';
import Album from './components/Album';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Introduce />
            <Album />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
