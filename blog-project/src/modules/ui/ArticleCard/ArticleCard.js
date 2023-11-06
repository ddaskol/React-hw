import React from "react";
import '../../Blog/Blog.css'
import './ArticleCard.css'

import { Link } from "react-router-dom";

// compound pattern
const ArticleTitle = ({to, children}) => {
    return <div className="shortArticleItem_title">
        <p>
            <Link to={`/article/${to}`}>{children}</Link>
        </p>
    </div>
}
const ArticleSubtitle = ({children}) => {
    return <div className="shortArticleItem_subtitle">
        <p>{children}</p>
    </div>
}
const ArtcileImage = ({children}) => {
    return <div className="shortArticleItem_img">
        <img src={children} alt="betaImgLocal"></img>
    </div>

}
const ArticleCard = ({
    children
}) => {
    return (
        <div className="shortArticleItem">
            { React.Children.map(children, (item) => item) }
        </div>
    )
}


ArticleCard.Title = ArticleTitle
ArticleCard.Subtitle = ArticleSubtitle
ArticleCard.Image = ArtcileImage

export default ArticleCard


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
