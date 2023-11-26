import React, { useEffect, useState } from "react";
import "./Blog.css"

// import articles from "./articles";
import ArticleCard from "../ui/ArticleCard/ArticleCard";
import { ArticlesList } from "../ui/ArcitlesList/ArticlesList";
import { fetchArticles } from "../../api/fetchArticles";
import { useArticles } from "../ui/ArcitlesList/useArticles";

const { Image, Title, Subtitle } = ArticleCard

const Blog = ({ }) => {
    const { articles, currentArticle } = useArticles({ index: 0 })


    return (
        <div className="blog">
            <div className="container">
                <div className="activeArticle">
                    <ArticleCard>
                        <Image>{currentArticle.image}</Image>
                        <Title to={currentArticle.id}>{currentArticle.title}</Title>
                        <Subtitle>{currentArticle.subtitle}</Subtitle>
                    </ArticleCard>
                </div>

                <div className="line"><div className="hr"> </div></div>

                <ArticlesList articles={articles} currentId={1} />

            </div>
        </div>
    )
}

export default Blog