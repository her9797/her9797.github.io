import React from 'react';

function Header() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Sim Minseop</span>
        </h1>
        <p className="header-subtitle">BACKEND DEVELOPER</p>

        <a href="https://github.com/her9797" className="btn btn-primary">Visit My Github</a>

      </div>
    </header>
  );
}

export default Header;
