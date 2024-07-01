import React, { useState } from 'react';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSmoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`custom-navbar ${isNavOpen ? 'nav-open' : ''}`} data-spy="affix" data-offset-top="20">
      <div className="container">
        <a className="logo" href="/">Minseop</a>
        <ul className={`nav ${isNavOpen ? 'show' : ''}`}>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('home')}>Home</a>
          </li>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('about')}>About</a>
          </li>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('portfolio')}>Portfolio</a>
          </li>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('skills')}>Skills</a>
          </li>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('blog')}>Blog</a>
          </li>
          <li className="item">
            <a className="link" onClick={() => handleSmoothScroll('contact')}>Contact</a>
          </li>
          
        </ul>
        <a href="javascript:void(0)" id="nav-toggle" className={`hamburger hamburger--elastic ${isNavOpen ? 'is-active' : ''}`} onClick={toggleNav}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;