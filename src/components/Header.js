// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components_css/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Amir Yousefi</Link>
                </div>
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/professional-experience">Professional Experience</Link></li>
                    <li><Link to="/awards-honors">Awards & Honors</Link></li>
                    <li><Link to="/teaching-experience">Teaching Experience</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/research-interests">Research Interests</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
