// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../components_css/Home.css';

const Home = () => {
    const { t } = useTranslation(); // Initialize the useTranslation hook

    return (
        <div>
            <h1 id="welcome">{t('welcome')}</h1>
            <p id="home_p1">
                <desc>{t('homeDescription')}</desc>
            </p>
        </div>
    );
};

export default Home;
