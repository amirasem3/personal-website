// src/pages/AboutMe.js
import React from 'react';
import '../components_css/AboutMe.css'
import {useTranslation} from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"about_me_title"}>{t('aboutMe')}</h1>
            <p id={"description"}>
                {t('aboutMeDescription')}<br/>
            </p>
            <p id={"email"}>
                {t('contactWays')}<br/>
                {t('contactInfo.email')}:<a href="mailto:Amiryousefi98@gmail.com">Amiryousefi98@gmail.com</a><br/>
            </p>
            <p id={"phone"}>
                {t('contactInfo.phone')}: <phone>{t('contactInfo.phoneNumber')}</phone> <br/>
            </p>
            <p id={"location"}>
                {t('contactInfo.location')}: <location>{t('contactInfo.actualLocation')}</location>
            </p>
        </div>
    );
};

export default AboutMe;

