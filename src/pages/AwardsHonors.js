// src/pages/AwardsHonors.js
import React from 'react';
import '../components_css/AwardHonors.css'
import {useTranslation} from "react-i18next";
const AwardsHonors = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id={"award_title"}>{t('awardsHonorsDetails.title')}</h1>
            <ul>
                <li>
                    <strong>{t('awardsHonorsDetails.staff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.icpc2017')}</desc>
                    <br/>
                    <desc>{t('awardsHonorsDetails.icpcDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.staff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.icpc2018')}</desc>
                    <br/>
                    <desc>{t('awardsHonorsDetails.icpcDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.staff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.icpc2019')}</desc>
                    <br/>
                    <desc>{t('awardsHonorsDetails.icpcDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.staff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.aiChallenge18')}</desc><br/>
                    <desc>{t('awardsHonorsDetails.sharifContestDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.staff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.aiChallenge19')}</desc><br/>
                    <desc>{t('awardsHonorsDetails.sharifContestDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.dataDaysStaff')}</strong><br/>
                    <desc id={"contest_title"}>{t('awardsHonorsDetails.dataDays')}</desc>
                    <br/>
                    <desc>{t('awardsHonorsDetails.sharifContestDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.startupWeekend')}</strong><br/>
                    <desc>{t('awardsHonorsDetails.startupUni')}</desc>

                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.wssStaff')}</strong><br/>
                    <strong>{t('awardsHonorsDetails.wss')}</strong><br/>
                    <desc>{t('awardsHonorsDetails.sharifContestDesc')}</desc>
                </li>
                <li>
                    <strong>{t('awardsHonorsDetails.jira')}</strong><br/>
                    
                </li>
            </ul>
        </div>
    );
};

export default AwardsHonors;
