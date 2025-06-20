import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResourcePage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="resource-page">
            <h1>Resource Page</h1>
            <p>This is the resource page where you can manage your resources.</p>
        </div>
    );

}

export default ResourcePage; 