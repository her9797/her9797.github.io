import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
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
      <Portfolio />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
