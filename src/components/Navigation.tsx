import React from 'react';


const Header: React.FC = () => {

const logo = require('./img/logo1.png');

  return (
    <header className="header">
        <div className="header-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}> {/*Fix width later with padding CSS*/}

            <div className="logo-container">
              <a href="/landing" className="header-logo-link">
              <img src={logo} alt="logo" className="header-logo" height={200}></img>
              </a>
            </div>
            <div className="nav-container" style={{ display: 'flex', alignItems: 'center' }}>
              <nav className="header-nav">
              <ul>
                <li><a href="/landing">Landing</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/resource">Resource</a></li>
                <li><a href="/team">Team</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <br></br>
    </header>
  );
};

export default Header; 