import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResourcePage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="resource-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Resource</span>
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default ResourcePage; 