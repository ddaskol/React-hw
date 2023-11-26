import React from 'react'

const facebook = "/images/facebook.svg"
const twitter = "/images/twitter.png"

const ArticleContent = ({
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
                    <button className="creator_network_btn" title="Share with facebook"><img src={facebook}></img></button>
                    <button className="creator_network_btn" title="Share with twitter"><img src={twitter}></img></button>
                </div>
            </div>
            <div className="articleItem_body">
                <div className="text">
                    {article.text?.map((item, i) => <p key={"text" + i + article.id}>{item}</p>)}
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

export default ArticleContent