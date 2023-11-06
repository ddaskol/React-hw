import React, { useEffect, useState } from "react";

import ArticleCard from "../../ui/ArticleCard/ArticleCard";

import articles from "../../Blog/articles";
import "./ArticlesList.css"

export const ArticlesList = ({ currentId }) => {
    const [otherArticles, setOtherArticles] = useState()

    useEffect(() => {
        const filtredArticles = articles.filter((article, i) => Number(article.id) !== Number(currentId))
        setOtherArticles(filtredArticles)
    }, [ currentId ])

    return (
        <div className="otherArticle">
            <div className="container">
                <div className="otherArticle_row">
                    <div className="otherArticle_title">
                        <h3>All articles</h3>
                    </div>
                    <div className="otherArticle_body">
                        {
                            otherArticles?.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                >
                                    <ArticleCard.Image>{article.image}</ArticleCard.Image>
                                    <ArticleCard.Title to={article.id}>{article.title}</ArticleCard.Title>
                                </ArticleCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}