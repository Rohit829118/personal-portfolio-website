import React, {useState} from "react";

import {CgMenuRight} from "react-icons/cg";
import {IoMdClose} from "react-icons/io";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import Section from "../../shared/section";
import {scrollToSection} from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (Section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(Section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="photo"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                    Blogs & Articles
                </span>
                <CallToAction
                    text="Contact me"
                    action={() => menuItemClickHandler("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
