// src/pages/Education.js
import React from 'react';
import '../components_css/Education.css'
import {useTranslation} from "react-i18next";

const Education = () => {
    const { t } = useTranslation();
    return (
        <div id={"education_div"}>
            <h1 id={"education_title"}>{t('education')}</h1>

            <p id={"bachelor"}>
                <university_name>{t('educationDetails.university')}</university_name>
                <br/>
                <strong id={"degree_title"}>{t('educationDetails.degree')}</strong><br/>
                <grade>{t('educationDetails.gpa')}: <gr_number>{t('educationDetails.actualGpa')}</gr_number></grade>
                <br/>
                <br/>
                <thesis>{t('educationDetails.thesis')}: <th_desc>{t('educationDetails.thesisDesc')}</th_desc>
                </thesis><br/>
                <strong id={"concentration_field"}>{t('educationDetails.fieldOfStudy')}:</strong> <desc>{t('educationDetails.fieldOfStudyDesc')}</desc><br/>
                <strong id={"relevant_course"}>{t('educationDetails.relevantCoursework')}:</strong> <desc>{t('educationDetails.relevantCourseWorkDesc')}</desc>

            </p>
            <br/>
            <p id={"master"}>
                <university_name>{t('educationDetails.masterUniversity')}</university_name><br/>
                <strong id={"degree_title"}>{t('educationDetails.masterDegree')}</strong>
            </p>

        </div>
    );
};

export default Education;
