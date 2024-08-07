// src/pages/TeachingExperience.js
import React from 'react';
import '../components_css/TeachingExperiences.css'
import {useTranslation} from "react-i18next";
const TeachingExperience = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"teaching_title"}>{t('teachingExperienceDetails.title')}</h1>
            <ul>
                <li>
                    <strong>{t('teachingExperienceDetails.architecture')}</strong><br />
                    <desc>{t('teachingExperienceDetails.architectureDesc')}</desc>
                </li>
                <li>
                    <strong>{t('teachingExperienceDetails.structure')}</strong><br />
                    <desc>{t('teachingExperienceDetails.structureDesc')}</desc>
                </li>
                <li>
                    <strong>{t('teachingExperienceDetails.numerical')}</strong><br />
                    <desc>{t('teachingExperienceDetails.numericalDesc')}</desc>
                </li>
            </ul>
        </div>
    );
};

export default TeachingExperience;
