import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeamPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="team-page">
            <h1>Team Page</h1>
            <p>This is the team page where you can manage your team members.</p>
        </div>
    );

}

export default TeamPage; 