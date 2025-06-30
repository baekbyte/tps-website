import React from 'react';
import './Navigation.css';

const Header: React.FC = () => {
  const logo = require('./img/whitelogo.png');

  return (
    <header className="sticky-nav">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            <a href="/home" className="logo-link">
              <img src={logo} alt="logo" className="nav-logo" height={50} />
            </a>
          </div>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li><a href="/home">HOME</a></li>
              <li><a href="/project">PROJECTS</a></li>
              <li><a href="/resource">RESOURCES</a></li>
              <li><a href="/team">TEAM</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 