// src/pages/ProfessionalExperience.js
import React from 'react';
import '../components_css/ProfessionalExperience.css'
const ProfessionalExperience = () => {
    return (
        <div>
            <h1 id={"prof_exp_title"}>Professional Experience</h1>
            <ul>
                <li>
                    <strong>Active member of the Student Union Council</strong><br />
                    <desc>Sharif University of Technology, 2019 - 2020</desc>
                </li>
                <li>
                    <strong>Designed and developed Tuffshell Android and IOS application</strong><br />
                    <desc>Developed tools to help labors find their exact workplace at construction sites.</desc>
                </li>
                <li>
                    <strong>Co-founder and Lead Android and IOS developer at Hirafutech</strong><br />
                    <desc>Designed and built smart implants for people with disabilities.</desc>
                </li>
                <li>
                    <strong>Developed a prediction model for water percolation in coffee beans</strong><br />
                    <desc>Implemented in Java using Monte Carlo simulation.</desc>
                </li>
                <li>
                    <strong>Created a Java simulation game inspired by Harvest Moon</strong><br />
                    <desc>Simulates a farmer's daily activities including harvesting, trading, and more.</desc>
                </li>
                <li>
                    <strong>Developed a text classification model for news articles in C</strong><br />
                    <desc>Categorized natural language text according to content.</desc>
                </li>
            </ul>
        </div>
    );
};

export default ProfessionalExperience;
