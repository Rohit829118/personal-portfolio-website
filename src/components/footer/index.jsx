import React from "react";

import {
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaStackOverflow,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import {scrollToSection} from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            classNamme="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="logopt"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skils
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaFacebook />}
                        link="https://www.facebook.com/rohitkumar.yadaw.56/"
                    />
                    <SocialIcon
                        color="#0D2663"
                        icon={<FaGithub />}
                        link="https://www.github.com"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedin />}
                        link="https://www.linkedin.com/in/rohit-yadav-a99995184/"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://www.youtube.com"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/rohit_yadav677/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright Rohit Yadav 2022 @React-D
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
