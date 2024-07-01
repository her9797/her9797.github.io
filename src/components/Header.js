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

        <button className="btn btn-primary">Visit My Github</button>
      </div>
    </header>
  );
}

export default Header;
