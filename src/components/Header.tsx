import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="header">
        <h1 className="header-title">TPS</h1>
        <nav className="header-nav">
            <ul>
            <li><a href="/landing">Landing</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/resource">Resource</a></li>
            <li><a href="/team">Team</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header; 