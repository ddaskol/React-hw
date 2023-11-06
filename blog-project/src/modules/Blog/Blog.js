import React, { useEffect, useState } from "react";
import "./Blog.css"

import articles from "./articles";
import ArticleCard from "../ui/ArticleCard/ArticleCard";
import {ArticlesList} from "../ui/ArcitlesList/ArticlesList";

const { Image, Title, Subtitle } = ArticleCard

const Blog = ({}) => {
    const [mainArticle, setMainArticle] = useState(articles[0])

    return (
        <div className="blog">
            <div className="container">
                <div className="activeArticle">
                    <ArticleCard>
                        <Image>{mainArticle.image}</Image>
                        <Title to={mainArticle.id}>{mainArticle.title}</Title>
                        <Subtitle>{mainArticle.subtitle}</Subtitle>
                    </ArticleCard>
                </div>

                <div className="line"><div className="hr"> </div></div>

                <ArticlesList currentId={1}/>

            </div>
        </div>
    )
}

export default Blog