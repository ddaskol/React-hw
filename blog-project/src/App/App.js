import React from "react";
import "../common/styles/reset.css"
import "../common/styles/base.css"

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ActiveArticle from "./Main/ActiveArticle/ActiveArticle";
import AboutUs from "./Main/AboutUs/AboutUs"


const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App
