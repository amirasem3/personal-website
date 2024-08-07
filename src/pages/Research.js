// src/pages/Research.js
import React from 'react';
import '../components_css/Research.css'
import {useTranslation} from "react-i18next";
const Research = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"research_title"}>{t('researchDetails.title')}</h1>
            <ul>
                <li>{t('researchDetails.r2')}</li>
                <li>{t('researchDetails.r3')}</li>
                <li>{t('researchDetails.r4')}</li>
                <li>{t('researchDetails.r5')}</li>
                <li>{t('researchDetails.r6')}</li>
                <li>{t('researchDetails.r7')}</li>
                <li>{t('researchDetails.r8')}</li>
                <li>{t('researchDetails.r9')}</li>
                <li>{t('researchDetails.r10')}</li>
            </ul>
        </div>
    );
};

export default Research;
