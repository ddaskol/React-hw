import React from "react";
import '../Blog.css'
import './ArticleItem.css'

//test
import facebook from "../../../../common/images/facebook.svg"
import twitter from "../../../../common/images/twitter.png"
import eyes from "../../../../common/images/eyes.png"

///test

import logo from "../../../../common/images/articleTestlogo.png"
import { Link } from "react-router-dom";


const ArticleItem = ({
    article,
    type = "short",

}) => {
    const { isActiveArticle, id, subtitle, title, image, creatorAvatar, creatorName, createDate, createInfo, coreImage, coreImageCaption, text } = article
    return (
        <>
            <ShortArticle
                article={article}
            />

            {
                type == "long"
                &&
                <LongArticle
                    article={article}
                />
            }
        </>
    )
}

const ShortArticle = ({
    article
}) => {
    return (
        <div className="shortArticleItem">
            <div className="shortArticleItem_img">
                <img src={article.image} alt="betaImgLocal"></img>
            </div>

            {/* {isActiveArticle === true ?
                <div className="article_title">
                    <p>
                        {title}

                    </p>
                </div>
                :
                <div className="article_title">
                    <p>
                        <Link to={`/article/${id}`}>{title}</Link>
                    </p>
                </div>
            } */}

            <div className="shortArticleItem_title">
                <p>
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                </p>
            </div>

            {/* {article.isActiveArticle ?  */}
            <div className="shortArticleItem_subtitle">
                <p>{article.subtitle}</p>
            </div>
            {/* : null} */}
        </div>
    )
}

const LongArticle = ({
    article
}) => {
    return (
        <>
            <div className="line"><div className="hr"> </div></div>

            <div className="articleItem_creator_body">
                <div className="articleItem_creator_img">
                    <img src={article.creatorAvatar} alt="avatar"></img>
                </div>
                <div className="articleItem_creator_info">
                    <div className="creator_name">
                        <h4>{article.creatorName}</h4>
                    </div>
                    <div className="create_date">
                        <span>{article.createDate}</span>
                    </div>
                </div>
                <div className="creator_network">
                    <button className="creator_network_btn"><img src={facebook}></img></button>
                    <button className="creator_network_btn"><img src={twitter}></img></button>
                </div>
            </div>
            <div className="articleItem_body">
                <div className="text">
                    {article.text.map((item) => <p>{item}</p>)}
                </div>
                <div className="img">
                    <img src={article.coreImage}></img>
                    <div className="img_caption">
                        {article.coreImageCaption}
                    </div>
                </div>

                <div className="creator_network">
                    <button className="flex creator_network_btn">
                        <img src={facebook}></img>
                        <p>Share on Facebook</p>
                    </button>
                    <button className=" flex creator_network_btn">
                        <img src={twitter}></img>
                        <p>Share on Twitter</p>
                    </button>
                </div>
            </div>
            {/* <div className="line"><div className="hr"> </div></div> */}

            <div className="articleItem_creator_body">
                <div className="articleItem_creator_img">
                    <img src={article.creatorAvatar} alt="avatar"></img>
                </div>
                <div className="articleItem_creator_info">
                    <div className="creator_name">
                        <h4>{article.creatorName}</h4>
                    </div>
                    <div className="creator_network_btn">
                        <span>{article.creatorInfo}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ArticleItem


// const text = [
//     { type: "img", content: "..." },
//     { type: "p", content: "..." },
//     { type: "list", content: "..." },
// ]

//     < div >
// {
//     text.map((item) => {
//         if (item.type == "img") {
//             return <img>{item.content}</img>
//         } else if (item.type == "p") {
//             return <p>{item.content}</p>
//         } else if (item.type == "list") {
//             return <li>{item.content}</li>
//         } else {
//             return <span>{item.content}</span>
//         }
//     })
// }


// </>
