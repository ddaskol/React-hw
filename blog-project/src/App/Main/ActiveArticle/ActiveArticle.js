import React, { useEffect, useState } from "react";
import "./ActiveArticle.css"
import logo from "../../../common/images/articleTestlogo.png"

import facebook from "../../../common/images/facebook.svg"
import twitter from "../../../common/images/twitter.png"
// import avatar from "../../../common/images/avatar.png"
import eyes from "../../../common/images/eyes.png"
import ArticleItem from "../Blog/ArticleItem/ArticleItem";
import articles from "../Blog/articles";
import { OtherArticle } from "../Components/OtherArticle/OtherArticle";
import { useLoaderData } from "react-router-dom";


const ActiveArticle = () => {
    // const [mainAarticlerticle, setarticle] = useState(articles[0])



    const { article } = useLoaderData();

    console.log(article)

    return (
        <>
            <div className="activeArticle">

                <div className="container">
                    <div className="activeArticle">

                        <ArticleItem
                            article={article}
                            type="long"
                        />


                        {/* <div className="line"><div className="hr"> </div></div> *
                         <div className="activeArticle_creator_body">
                            <div className="activeArticle_creator_img">
                                <img src={avatar} alt="avatar"></img>
                            </div>
                            <div className="activeArticle_creator_info">
                                <div className="creator_name">
                                    <h4> Mika Matikainen</h4>
                                </div>
                                <div className="create_date">
                                    <span> Apr 15, 2020 · 4 min read</span>
                                </div>
                            </div>
                            <div className="creator_network">
                                <button className="creator_network_btn"><img src={facebook}></img></button>
                                <button className="creator_network_btn"><img src={twitter}></img></button>
                            </div>
                        </div>
                        <div className="activeArticle_body">
                            <div className="text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
                                </p>
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                                </p>
                                <h3>Next on the pipeline</h3>
                                <p>
                                    Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                                <p>
                                    Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
                                </p>
                            </div>
                            <div className="img">
                                <img src={logo}></img>
                                <div className="img_caption">
                                    Image caption centered this way and I’ll make this a bit longerto indicate the amount of line-height.
                                </div>
                            </div>
                            <div className="text">
                                <p></p>
                                <p></p>
                                <p>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </p>
                                <p></p>
                                <p></p>

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
                        <div className="line"><div className="hr"> </div></div>

                        <div className="activeArticle_creator_body">
                            <div className="activeArticle_creator_img">
                                <img src={avatar} alt="avatar"></img>
                            </div>
                            <div className="activeArticle_creator_info">
                                <div className="creator_name">
                                    <h4> Mika Matikainen</h4>
                                </div>
                                <div className="create_date">
                                    <span> Apr 15, 2020 · 4 min read</span>
                                </div>
                            </div>
                            <div className="creator_network">
                                <button className="creator_network_btn"><img src={facebook}></img></button>
                                <button className="creator_network_btn"><img src={twitter}></img></button>
                            </div>
                        </div> */}
                    </div>
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
