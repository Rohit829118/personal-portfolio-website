import React from "react";
// import {BsAwardFill} from "react-icons/bs";
// import {FaUser} from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import {scrollToSection} from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am </span>
                        </span>
                        <span className="big-text">Rohit Yadav</span>
                    </h1>
                    <p>
                        Well-qualified Frontend Developer familiar with wide
                        range of programming utilities and languages,
                        Knowledgeable of frontend development requirements.
                        Handles any part of process with ease. Collaborative
                        team player with excellent technical abilities.
                    </p>
                    <CallToAction
                        text="Contect me "
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Girl"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
