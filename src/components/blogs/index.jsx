import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            Background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Rohit Yadav"
                    date="Dec 8 2022"
                    image={Blog1}
                    title="Johar"
                    description="It is a HTML page in which thumbnail will
                    shown in the first page clicking on it user will
                    be redirected to next page and video will start
                    in this i have used pure HTML and CSS and
                    little bit of Javascript"
                />
                <BlogCard
                    user="Rohit Yadav"
                    date="Dec 8 2022"
                    image={Blog2}
                    title="Food recipes search"
                    description="I have used third party API to fetch the data of
                    recipes and showing in recipes details in the
                    front-end
                    I have used ReactJs,HTML and CSS to display
                    recipes details"
                />
                <BlogCard
                    user="Rohit Yadav"
                    date="Dec 8 2022"
                    image={Blog3}
                    title="Make a world around"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad mollitia repellat vel doloribus quae magnam enim sapiente obcaecati magni quibusdam, quis nemo et perferendis reiciendis ipsum atque. Ullam soluta blanditiis possimus cum nostrum ipsam corporis magnam nobis veniam eveniet dolores, excepturi amet repellat, doloremque eius tempore? Blanditiis esse hic nihil nemo numquam eveniet sunt, eos consequatur aspernatur quos modi, dolorem temporibus quibusdam sint explicabo debitis ipsam maiores minima labore illo earum, magni rem nesciunt suscipit? Nam, quisquam? Veniam rerum labore eligendi, molestiae libero alias quisquam deserunt adipisci, consequuntur reprehenderit pariatur? Cumque alias aut, nam laudantium similique architecto ratione fugiat!"
                />
            </div>
        </Section>
    );
};

export default Blogs;
