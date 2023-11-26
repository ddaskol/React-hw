import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../../api/fetchArticles";

const mockedArticle = {
    image: "image",
    id: "",
    title: "",
    subtitle: ""
}

export const useArticles = ({ index, id }) => {
    const [currentArticle, setCurrentArticle] = useState(mockedArticle)
    const [articles, setArticles] = useState([
        mockedArticle
    ])

    useEffect(() => {
        fetchArticles().then(articles => {
            setArticles(articles)
            if (index !== undefined) {
                setCurrentArticle(articles[index])
            } else if (id !== undefined) {
                const searchedArticle = articles.find((article) => article.id == id)
                searchedArticle && setCurrentArticle(searchedArticle)
            }
        })
    }, [index, id])
    return { articles, currentArticle }

}
