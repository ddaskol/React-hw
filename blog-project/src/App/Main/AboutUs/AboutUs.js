import React from "react";
import "./aboutUs.css"

import gtf from "../../../common/images/gtf.png"
import m from "../../../common/images/mackay.png"
import harriet from "../../../common/images/harriet.png"
import basis from "../../../common/images/basis.png"
import nokia from "../../../common/images/nokia.png"
import ButtonScrollToTop from "../ButtonScrollToTop/ButtonScrollToTop";

const AboutUs = () => {
    return (
        <div className="main">
            <ButtonScrollToTop />
            <div className="aboutUs_top">
                <div className="aboutUs_top_suptitle">
                    Version 1.0 (Mar 25, 2020)
                </div>
                <div className="aboutUs_top_title">
                    Read me
                </div>
            </div>
            <div className="aboutUs_body">
                <div className="container">
                    <div className="activeArticle_title aboutUs_title">
                        How this file can be used
                    </div>
                    <div className="aboutUs_text">
                        <p>
                            Feel free to use this file in any way you want, you can edit a copy of this file as much as you want for non-commercial or commercial purposes. Its not necessary, but if you want, you can ping me at mikamatikainen on Twitter when using this file. Would be just nice to see how this evolves
                            Images: Copyright © Unsplash or Mika Matikainen.
                        </p>
                    </div>

                    <div className="activeArticle_title aboutUs_title">
                        A note about typefaces
                    </div>
                    <div className="aboutUs_text">
                        <p>
                            This file is using platform-native typefaces for iOS & macOS, designed by Apple. To make texts editable, you can download the typefaces
                        </p>
                    </div>

                    <div className="activeArticle_title aboutUs_title">
                        Fonts used on the live site
                    </div>
                    <div className="aboutUs_text">
                        <p>
                            Just for reference or if you're interested, I list here the typefaces I'm using in on the live site at https://www.nordicrose.net. If you'd like to use them in your own project, I added links for you as well to make it easier to purchase the required license.
                        </p>

                        <div className="aboutUs_text_img_box"><img src={gtf} alt="123" ></img></div>
                        <p>
                            - used in the logo as a vector outline- by Good Type Foundry (https://www.goodtypefoundry.com/chapter)
                        </p>

                        <div className="aboutUs_text_img_box"><img src={m} ></img></div>
                        <p>
                            - large headlines-by Rene Gieder
                        </p>

                        <div className="aboutUs_text_img_box"><img src={harriet} ></img></div>
                        <p>
                            - body copy - by Okay Type (https://okaytype.com/typefaces/harriet)
                        </p>

                        <div className="aboutUs_text_img_box"><img src={basis} ></img></div>
                        <p>
                            – UI elements, some subtitles and some body copy - by Colophon Foundry https://www.colophon-foundry.org/typefaces/basis-grotesque/
                        </p>

                        <div className="aboutUs_text_img_box"><img src={nokia} ></img></div>
                        <p>
                            - some playful elements at some point, maybe-by Zeh Fernando, available for free at Dafont https://www.dafont.com/nokia-cellphone.font
                        </p>
                    </div>
                </div>
            </div>

        </div>



    )
}
export default AboutUs