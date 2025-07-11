import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Navigation';
import Footer from './components/Footer';
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
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/resource" element={<ResourcePage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
