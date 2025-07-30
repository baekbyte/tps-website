import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2025 TPS Website. All rights reserved. <a className="creator" href='https://github.com/baekbyte'>Site by Nathan Baek</a></p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <a href="/home">Home</a>
              <a href="/project">Projects</a>
              <a href="/resource">Resources</a>
              <a href="/team">Team</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 