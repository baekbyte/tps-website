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
                        linkedin="https://www.linkedin.com/in/amelia-frank/"
                        email="afrank33@jh.edu"
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
                        image='/headshots/4.JPG'
                        name="Idris Sunmola"
                        title="Head of Research"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/idris-sunmola-78784948/"
                        email="isunmol1@jhu.edu"
                    />
                    <TeamCard
                        image='/headshots/5.JPG'
                        name="Yueran (Joy) Yu"
                        title="Head of Marketing"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/yueran-yu-440a091a4/"
                        email="yyu112@jhu.edu"
                    />
                    <TeamCard
                        image='/headshots/6.JPG'
                        name="Andreas Jaramillo"
                        title="Head of Technology"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/andreas-jaramillo/"
                        email="ajarami6@jhu.edu"
                    />
                    <TeamCard
                        image='/headshots/7.JPG'
                        name="Jason Lafita"
                        title="Head of Communicatons"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/jason-lafita-ba2187232/"
                        email="jlafita1@jh.edu"
                    />
                    <TeamCard
                        image='/headshots/3.JPG'
                        name="Bertrand Lin"
                        title="Treasurer"
                        affiliation="Johns Hopkins University"
                        linkedin="https://linkedin.com"
                        email="clin143@jh.edu"
                    />
                    <TeamCard
                        image='/headshots/8.JPG'
                        name="Laila Paredes"
                        title="Technology"
                        affiliation="Johns Hopkins University"
                        linkedin="https://www.linkedin.com/in/laila-paredes/"
                        email="lparede2@jhu.edu"
                    />
                    {/* Add more <TeamCard ... /> for each member */}
                </div>
                </div>
            </section>
        </div>
    );

}

export default TeamPage; 