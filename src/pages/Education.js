// src/pages/Education.js
import React from 'react';
import '../components_css/Education.css'

const Education = () => {
    return (
        <div id={"education_div"}>
            <h1 id={"education_title"}>Education</h1>

            <p id={"bachelor"}>
                <university_name>Sharif University of Technology(2016-2021)</university_name>
                <br/>
                <strong id={"degree_title"}>B.S., Computer Engineering</strong><br/>
                <grade>GPA: <gr_number>15.76/20</gr_number></grade>
                <br/>
                <br/>
                <thesis>Thesis: <th_desc>Design and Implementation of a web-based drug exchange platform</th_desc>
                </thesis><br/>
                <strong id={"concentration_field"}>Field of Concentration:</strong> <desc>Web programming, Finance, Digital Marketing, Supply Chain
                Management </desc><br/>
                <strong id={"relevant_course"}>Relevant Coursework:</strong> <desc>Web Programming, Database Design, System Analysis & Design, Design
                of Algorithms, Software Engineering</desc>

            </p>
            <br/>
            <p id={"master"}>
                <university_name>Islamic Azad University (Central) Branch(2021-Now)</university_name><br/>
                <strong id={"degree_title"}>M.Sc. Software Engineering</strong>
            </p>

        </div>
    );
};

export default Education;
