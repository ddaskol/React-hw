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
                        title={mainArticle.title}
                        image={mainArticle.image}
                        subtitle={mainArticle.subtitle}
                    />
                </div>

                <div className="line"><div className="hr"> </div></div>

                <OtherArticle
                />

                {/* <div className="articlesBl">
                    <div className="articlesBl_row">
                        <div className="articlesBl_title">
                            <h3>All articles</h3>
                        </div>
                        <div className="articlesBl_body">
                            {


                                otherArticles?.map(({
                                    id, title, image
                                }) => (
                                    <ArticleItem
                                        key={id}
                                        title={title}
                                        image={image}

                                    />
                                ))
                            }
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Blog
