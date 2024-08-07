// src/pages/AboutMe.js
import React from 'react';
import '../components_css/AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 id={"about_me_title"}>About Me</h1>
            <p id={"description"}>
                I'm Amir Yousefi, a computer engineer with a keen interest in web programming, digital marketing, and supply chain management. I graduated from Sharif University of Technology with a B.S. in Computer Engineering.
            </p>
            <p id={"email"}>
                    Email:<a href="mailto:Amiryousefi98@gmail.com">Amiryousefi98@gmail.com</a><br/>
            </p>
            <p id={"phone"}>
                    Phone: <phone>+98 (912) 818-6413</phone> <br/>
            </p>
            <p id={"location"}>
                Location: <location>Tehran, Iran</location>
            </p>
        </div>
    );
};

export default AboutMe;

