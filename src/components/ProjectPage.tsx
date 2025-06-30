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
            <section className='main-section project-section' id="project">
                <div className='project-block'>
                    <h2 className="project-title">AI SECURITY HACAKTHON</h2>
                    <div className="project-divider"></div>
                    <h2 className="project-title">AI SECURITY FRONTIERS FELLOWSHIP</h2>
                    <div className="project-divider"></div>
                </div>
            </section>
        </div>
    );

}

export default ProjectPage; 