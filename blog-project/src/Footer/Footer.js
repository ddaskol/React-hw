import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_row">
                <div className="uppercase footer_topTextLine">
                    <span className="bold">Digital product design</span>
                    <span className="light">Remote work</span>
                    <span className="bold">UX design</span>
                    <span className="light">Distributed teams</span>
                    <span className="bold">Creativity</span>
                    <span className="light">Strategy</span>
                    <span className="bold">Suspense</span>
                    <span className="light">Growth</span>
                </div>
                <div className="footer_logo">

                </div>
                <div className="footer_text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                    </p>
                </div>
                <div className="footer_contacts">
                    <a href="/"> Twitter</a>
                    <a href="/"> Linkedin</a>
                    <a href="/"> RSS</a>
                </div>
                <div className="footer_aboutInfo">
                    <span>
                        © 2012–2020 Nordic Rose Co. <br />
                        All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer