import React from "react";
import logo from "../../common/images/articleTestlogo.png"
import "./Main.css"

const Main = ({
    ActiveArticle
}) => {
    return (
        <div className="main">
            <div className="container">
                <div className="activeArticle">
                    <div className="activeArticle_logo">
                        <img src={logo} alt="now its static article logo"></img>
                    </div>
                    <div className="activeArticle_title">
                        <h2>A few words about this blog platform, Ghost, and how this site was made</h2>
                    </div>
                    <div className="activeArticle_subtitle">
                        <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
                    </div>
                    <div className="line"><div className="hr"> </div></div>


                </div>
                <div className="articlesBl">
                    <div className="articlesBl_row">
                        <div className="articlesBl_title">
                            <h3>All articles</h3>
                        </div>
                        <div className="articlesBl_body">
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>
                            <div className="article_item">
                                <div className="article_img">
                                    <img src={logo} alt="betaImgLocal"></img>
                                </div>
                                <div className="article_title">
                                    <p>Here are some things you should know regarding how we work </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
