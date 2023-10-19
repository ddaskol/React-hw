import React from "react";

import logo from "./logo.png"
import "./logo.css"
// import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo">
            {/* <Link to='/'><img src={logo} /></Link> */}
            <img src={logo} alt="///" className="logo_img"></img>
        </div>
    )
}

export default Logo