import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ProjectPage from './components/ProjectPage';
import ResourcePage from './components/ResourcePage';
import TeamPage from './components/TeamPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<MainPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/resource" element={<ResourcePage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
