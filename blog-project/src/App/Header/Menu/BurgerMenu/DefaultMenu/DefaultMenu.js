import React from "react";
import "./DefaultMenu.css"
import { Link } from "react-router-dom";

const DefaultMenu = () => {
    return (
        <div className="menu">
            <ul className="menu_list">
                <li className="menu_list_item"><Link to="/" className="menu_link">Blog</Link></li>
                <li className="menu_list_item"><Link to="/about" className="menu_link">About</Link></li>
                <li className="menu_list_item"><Link to="/" className="menu_link">Lines</Link></li>
                <li className="menu_list_item"><Link to="/article" className="menu_link">Projects</Link></li>
            </ul>
        </div>
    )
}

export default DefaultMenu