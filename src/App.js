// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import ProfessionalExperience from './pages/ProfessionalExperience';
import AwardsHonors from './pages/AwardsHonors';
import TeachingExperience from './pages/TeachingExperiences';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import './App.css';
import research from "./pages/Research";
import Research from "./pages/Research";
import './i18n';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/professional-experience" element={<ProfessionalExperience />} />
                    <Route path="/awards-honors" element={<AwardsHonors />} />
                    <Route path="/teaching-experience" element={<TeachingExperience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/research-interests" element={<Research/>}/>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
