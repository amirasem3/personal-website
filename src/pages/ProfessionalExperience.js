// src/pages/ProfessionalExperience.js
import React from 'react';
import '../components_css/ProfessionalExperience.css'
import {useTranslation} from "react-i18next";
const ProfessionalExperience = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"prof_exp_title"}>{t('professionalExperienceDetails.professionalTitle')}</h1>
            <ul>

                <li>
                    <strong>{t('professionalExperienceDetails.studentCouncil')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.studentCouncilDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.tuffshell')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.tuffshellDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.hirafutech')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.hirafutechDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.coffeePrediction')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.coffeePredictionDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.harvestMoon')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.harvestMoonDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.textClassification')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.textClassificationDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.vira')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.viraDesc')}</desc>
                </li>
                <li>
                    <strong>{t('professionalExperienceDetails.espandar')}</strong><br/>
                    <desc>{t('professionalExperienceDetails.espandarDesc')}</desc>
                </li>
            </ul>
        </div>
    );
};

export default ProfessionalExperience;
