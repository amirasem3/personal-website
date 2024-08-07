// src/pages/Skills.js
import React from 'react';
import '../components_css/Skills.css'
import {useTranslation} from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"skill_title"}>{t('skillsDetails.title')}</h1>
            <h2>{t('skillsDetails.technical')}</h2>
            <p id={"technical_skills"}>
                {t('skillsDetails.technicalDesc')}
            </p>
            <h2>{t('skillsDetails.programmingLanguages')}</h2>
            <ul>
                <li>Verilog</li>
                <li>VHDL</li>
                <li>C#(.NET)</li>
                <li>Dart(Flutter)</li>
                <li>GO</li>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Android (Java)</li>
                <li>Swift</li>
                <li>SQL</li>
                <li>Latex</li>
            </ul>
            <h2>{t('skillsDetails.languages')}</h2>
            <ul>
                <li>Persian (Fluent)</li>
                <li>English (Professional) (IELTS:7.5) (TOEFL:80)</li>
            </ul>
        </div>
    );
};

export default Skills;
