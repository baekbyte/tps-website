import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css';
import TeamCard from './TeamCards';

const TeamPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="team-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Meet the Team</span>
                        </h1>
                    </div>
                </div>
            </section>
            {/* Section 2: Team Cards */}
            <section className="team-cards-section">
                <div className="team-cards-block">
                    <h2 className="team-cards-title">EXECUTIVE BOARD</h2>
                    <div className="team-cards-divider"></div>
                
                <div className="team-cards-container">
                    <TeamCard
                        image='/headshots/1.JPG'
                        name="Amelia Frank"
                        title="President"
                        affiliation="Johns Hopkins University"
                        linkedin="https://linkedin.com"
                        email="jane.doe@email.com"
                    />
                    <TeamCard
                        image='/headshots/2.JPG'
                        name="Seokhyun (Nathan) Baek"
                        title="Vice President"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/baekseokhyun/"
                        email="sbaek19@jh.edu"
                    />
                    <TeamCard
                        image='/headshots/nathan.JPG'
                        name="Idris Sunmola"
                        title="Head of Research"
                        affiliation="Johns Hopkins University"
                        linkedin="https://linkedin.com"
                        email="jane.doe@email.com"
                    />
                    <TeamCard
                        image='/headshots/nathan.JPG'
                        name="Amelia Frank"
                        title="President"
                        affiliation="Johns Hopkins University"
                        linkedin="https://linkedin.com"
                        email="jane.doe@email.com"
                    />
                    <TeamCard
                        image='/headshots/nathan.JPG'
                        name="Seokhyun (Nathan) Baek"
                        title="Vice President"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/baekseokhyun/"
                        email="sbaek19@jh.edu"
                    />
                    <TeamCard
                        image='/headshots/nathan.JPG'
                        name="Idris Sunmola"
                        title="Head of Research"
                        affiliation="Johns Hopkins University"
                        linkedin="https://linkedin.com"
                        email="jane.doe@email.com"
                    />
                    {/* Add more <TeamCard ... /> for each member */}
                </div>
                </div>
            </section>
        </div>
    );

}

export default TeamPage; 