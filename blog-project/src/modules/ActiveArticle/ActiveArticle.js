import React, { useEffect, useState } from "react";
import "./ActiveArticle.css"

import ArticleCard from "../ui/ArticleCard/ArticleCard";

import { ArticlesList } from "../ui/ArcitlesList/ArticlesList";
import { useLoaderData, useParams } from "react-router-dom";
import ArticleContent from "../ui/ArticleContent/ArticleContent";
import { scrollToTop } from "../../helpers";
import { useArticles } from "../ui/ArcitlesList/useArticles";

const eyes = "/images/eyes.png"

const ActiveArticle = () => {
    const { id } = useParams()
    const { articles } = useArticles({ id })

    const { article } = useLoaderData();

    useEffect(() => {
        scrollToTop()
    }, [id])
    return (
        <>
            <div className="activeArticle">

                <div className="container">
                    <ArticleCard>
                        <ArticleCard.Image>{article.image}</ArticleCard.Image>
                        <ArticleCard.Title to={article.id}>{article.title}</ArticleCard.Title>
                        <ArticleCard.Subtitle>{article.subtitle}</ArticleCard.Subtitle>
                    </ArticleCard>

                    <ArticleContent article={article} />
                </div>
            </div>
            <div className="hr_eyes">
                <div className="line"><div className="hr"> </div></div>
                <div className="eyes_img">
                    <img src={eyes}></img>
                </div>
            </div>

            <ArticlesList currentId={id} articles={articles} />
        </>
    )
}

export default ActiveArticle
