import React, { useEffect, useState } from "react";
import "./Blog.css"
import ArticleItem from "./ArticleItem/ArticleItem";

import articles from "./articles";
import { OtherArticle } from "../Components/OtherArticle/OtherArticle";


const Blog = ({
}) => {
    const [mainArticle, setMainArticle] = useState(articles[0])

    return (
        <div className="blog">
            <div className="container">
                <div className="activeArticle">
                    <ArticleItem
                        article={mainArticle}

                    />
                </div>

                <div className="line"><div className="hr"> </div></div>

                <OtherArticle
                />

            </div>
        </div>
    )
}

export default Blog
