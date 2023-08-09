import React from "react";
import {AiOutlineCloudDownload} from "react-icons/ai";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,React,HTML,CSS"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        HTML, CSS, JavaScript, ReactJs, JSX, SCSS, Java/OOPs,
                        C/C++, Data Structures, Algorithm
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        link="https://www.linkedin.com/in/rohit-yadav-a99995184/"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
