import React, { useEffect } from "react";
import "../styles/reset.css"
import "../styles/base.css"

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
            <ButtonScrollToTop />
        </>
    );
}

export default App
