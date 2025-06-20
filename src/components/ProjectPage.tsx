import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="project-page">
            <h1>Project Page</h1>
            <p>This is the project page where you can manage your projects.</p>
        </div>
    );

}

export default ProjectPage; 