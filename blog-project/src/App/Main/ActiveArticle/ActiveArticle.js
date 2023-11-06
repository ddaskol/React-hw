import React, { useEffect, useState } from "react";
import "./ActiveArticle.css"
import eyes from "../../../common/images/eyes.png"
import ArticleItem from "../Blog/ArticleItem/ArticleItem";

import { OtherArticle } from "../Components/OtherArticle/OtherArticle";
import { useLoaderData } from "react-router-dom";


const ActiveArticle = () => {
    // const [mainAarticlerticle, setarticle] = useState(articles[0])
    const { article } = useLoaderData();

    return (
        <>
            <div className="activeArticle">

                <div className="container">
                    {/* <div className="activeArticle"> */}

                    <ArticleItem
                        article={article}
                        type="long"
                    />
                    {/* </div> */}
                </div>
            </div>
            <div className="hr_eyes">
                <div className="line"><div className="hr"> </div></div>
                <div className="eyes_img">
                    <img src={eyes}></img>
                </div>
            </div>

            <OtherArticle />
        </>
    )
}

export default ActiveArticle
