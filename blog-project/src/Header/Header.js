import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header_row">
                <div className="logo">

                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Lines</a></li>
                        <li><a href="/">Projects</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header