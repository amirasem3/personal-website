// src/components/Header.js
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../components_css/Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    // Effect to update the document direction
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
    }, [i18n.language]);
    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">{t('myName')}</Link>
                </div>
                <ul className="navbar-menu">
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/about-me">{t('aboutMe')}</Link></li>
                    <li><Link to="/education">{t('education')}</Link></li>
                    <li><Link to="/professional-experience">{t('professionalExperience')}</Link></li>
                    <li><Link to="/awards-honors">{t('awardsHonors')}</Link></li>
                    <li><Link to="/teaching-experience">{t('teachingExperience')}</Link></li>
                    <li><Link to="/skills">{t('skills')}</Link></li>
                    <li><Link to="/research-interests">{t('researchInterests')}</Link></li>
                </ul>
                <div className="language-toggle">
                    <button onClick={() => toggleLanguage('en')}>English</button>
                    <button onClick={() => toggleLanguage('fa')}>فارسی</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
