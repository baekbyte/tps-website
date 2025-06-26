import React from 'react';

const Header: React.FC = () => {
  const logo = require('./img/logo.png');

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
              <li><a href="/home">Home</a></li>
              <li><a href="/project">Project</a></li>
              <li><a href="/resource">Resource</a></li>
              <li><a href="/team">Team</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 