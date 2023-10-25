import React from "react";
import { Route, Routes } from 'react-router-dom';
import Blog from "./Blog/Blog"
import AboutUs from "./AboutUs/AboutUs";
import ActiveArticle from "./ActiveArticle/ActiveArticle";
import ButtonScrollToTop from "./Components/ButtonScrollToTop/ButtonScrollToTop";


const Main = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={Blog} />
                <Route path="/article" Component={ActiveArticle} />
                <Route path="/about" Component={AboutUs} />
            </Routes>

            <ButtonScrollToTop />
        </>

    )
}


export default Main