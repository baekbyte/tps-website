import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2025 TPS Website. All rights reserved. Site by Nathan Baek</p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <a href="/home">Home</a>
              <a href="/project">Project</a>
              <a href="/resource">Resource</a>
              <a href="/team">Team</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 