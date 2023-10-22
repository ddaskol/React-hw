import React from "react";
import '../Blog.css'

import logo from "../../../../common/images/articleTestlogo.png"


const ArticleItem = ({
    title, image
}) => {
    return (
        <div className="article_item">
            <div className="article_img">
                <img src={image} alt="betaImgLocal"></img>
            </div>
            <div className="article_title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ArticleItem