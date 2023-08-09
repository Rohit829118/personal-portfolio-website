import React from "react";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import "./app.scss";
import Footer from "./components/footer";

const app = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default app;
