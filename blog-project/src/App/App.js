import React from "react";
import "../common/styles/reset.css"
import "../common/styles/base.css"

import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";

import { Outlet } from "react-router-dom";
import ButtonScrollToTop from "../modules/ui/ButtonScrollToTop/ButtonScrollToTop";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ButtonScrollToTop/>
        </>
    );
}

export default App
