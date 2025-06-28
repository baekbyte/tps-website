import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="product-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Projects</span>
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default ProjectPage; 