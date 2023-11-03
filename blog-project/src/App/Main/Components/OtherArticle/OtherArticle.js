import React, { useEffect, useState } from "react";
import ArticleItem from "../../Blog/ArticleItem/ArticleItem";
import articles from "../../Blog/articles";
import "./OtherArticle.css"

export const OtherArticle = () => {
    const [otherArticles, setOtherArticles] = useState()

    useEffect(() => {
        const filtredArticles = articles.filter((article, i) => i !== 2)
        setOtherArticles(filtredArticles)
    }, [])
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
                                <ArticleItem
                                    key={article.id}
                                    article={article}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}