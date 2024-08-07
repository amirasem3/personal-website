// src/pages/TeachingExperience.js
import React from 'react';
import '../components_css/TeachingExperiences.css'
const TeachingExperience = () => {
    return (
        <div>
            <h1 id={"teaching_title"}>Teaching Experience</h1>
            <ul>
                <li>
                    <strong>Teaching Assistant, Computer Architecture</strong><br />
                    <desc>Sharif University of Technology, Fall 2019</desc>
                </li>
                <li>
                    <strong>Teaching Assistant, Computer Structure and Language</strong><br />
                    <desc>Sharif University of Technology, Fall 2019</desc>
                </li>
                <li>
                    <strong>Teaching Assistant, Numerical Computation</strong><br />
                    <desc>Sharif University of Technology, Spring 2019</desc>
                </li>
            </ul>
        </div>
    );
};

export default TeachingExperience;
