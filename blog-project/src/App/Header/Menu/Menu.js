import React from "react";
import "./menu.css"
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import DefaultMenu from "./BurgerMenu/DefaultMenu/DefaultMenu";


const Menu = () => {
    return (
        <>
            <DefaultMenu />
            <BurgerMenu />
        </>
    )
}

export default Menu