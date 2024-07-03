import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
