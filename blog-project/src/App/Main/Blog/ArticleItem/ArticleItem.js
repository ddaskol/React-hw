import React from "react";
import '../Blog.css'

import logo from "../../../../common/images/articleTestlogo.png"
import { Link } from "react-router-dom";


const ArticleItem = ({
    subtitle, title, image
}) => {
    return (
        <div className="article_item">
            <div className="article_img">
                <img src={image} alt="betaImgLocal"></img>
            </div>
            {/* {subtitle ?
                <div className="article_title">
                    <p>
                        {title}
                    </p>
                </div>
                :
                <div className="article_title">
                    <p>
                        <Link to="/article">{title}</Link>
                    </p>
                </div>
            } */}


            <div className="article_title">
                <p>
                    <Link to="/article">{title}</Link>
                </p>
            </div>

            {subtitle ? <div className="article_subtitle">
                <p>{subtitle}</p>
            </div> : null}
        </div>
    )
}

export default ArticleItem