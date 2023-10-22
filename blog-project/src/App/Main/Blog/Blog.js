import React from "react";
import logo from "../../../common/images/articleTestlogo.png"
import "./Blog.css"
import ButtonScrollToTop from "../ButtonScrollToTop/ButtonScrollToTop";
import ArticleItem from "./ArticleItem/ArticleItem";

import articles from "./articles";

const Blog = ({
}) => {
    return (
        <div className="blog">
            <ButtonScrollToTop />
            <div className="container">
                <div className="activeArticle">
                    <div className="activeArticle_logo">
                        <img src={logo} alt="now its static article logo"></img>
                    </div>
                    <div className="activeArticle_title">
                        <h2>A few words about this blog platform, Ghost, and how this site was made</h2>
                    </div>
                    <div className="activeArticle_subtitle">
                        <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
                    </div>
                    <div className="line"><div className="hr"> </div></div>


                </div>
                <div className="articlesBl">
                    <div className="articlesBl_row">
                        <div className="articlesBl_title">
                            <h3>All articles</h3>
                        </div>
                        <div className="articlesBl_body">
                            {
                                articles.map(({
                                    title, image
                                }) => (
                                    <ArticleItem
                                        title={title}
                                        image={image}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
