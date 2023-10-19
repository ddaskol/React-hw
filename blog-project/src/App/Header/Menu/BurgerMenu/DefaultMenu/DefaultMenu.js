import React from "react";
import "./DefaultMenu.css"

const DefaultMenu = () => {
    return (
        <div className="menu">
            <ul className="menu_list">
                <li className="menu_list_item"><a href="/" className="menu_link">Blog</a></li>
                <li className="menu_list_item"><a href="/" className="menu_link">About</a></li>
                <li className="menu_list_item"><a href="/" className="menu_link">Lines</a></li>
                <li className="menu_list_item"><a href="/" className="menu_link">Projects</a></li>
            </ul>
        </div>
    )
}

export default DefaultMenu