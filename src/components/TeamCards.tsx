import React from 'react';

interface TeamCardProps {
    image: string;
    name: string;
    title: string;
    affiliation: string;
    linkedin: string;
    email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, title, affiliation, linkedin, email }) => {
    return (
        <div className="team-card">
            <div className="team-card-img">
                <img src={image} alt={name} />
            </div>
            <div className="team-card-info">
                <div className="team-card-name">{name}</div>
                <div className="team-card-title">{title}</div>
                <div className="team-card-affiliation">{affiliation}</div>
                <div className="team-card-links">
                    <a href={`mailto:${email}`} className="team-card-icon" aria-label="Email">
                        <img src={require('./img/email.png')} alt="Email" style={{ width: 22, height: 22 }} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-card-icon" aria-label="LinkedIn">
                        <img src={require('./img/linkedin.png')} alt="Email" style={{ width: 22, height: 22 }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard; 