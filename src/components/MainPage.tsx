import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {

    const navigate = useNavigate();
    
    return (
        <div className="main-page">
            <h1>Welcome to the Main Page</h1>
            <p>This is the main landing page of the application.</p>
            <p>Use the navigation links to explore different sections.</p>
        </div>

    );

}

export default MainPage; 