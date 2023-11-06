import React from "react";
import "./DefaultMenu.css"
import { NavLink } from "react-router-dom";

const links = [
    {
        to: "/",
        title: "Blog"
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/",
        title: "Lines"
    },
    {
        to: "/article",
        title: "Projects"
    },
]
const DefaultMenu = ({
    type = "default"
}) => {

    return (
        <div className={`menu ${type}`}>
            <ul className="menu_list">
                {
                    links.map(({ to, title }, index) => {
                        return <li key={to+index} className="menu_list_item">
                            <NavLink to={to} className="menu_link">
                                {title}
                            </NavLink>
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default DefaultMenu