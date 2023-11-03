import React from "react";
import "../common/styles/reset.css"
import "../common/styles/base.css"

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            {/* <Main /> */}

            <Outlet />
            <Footer />
        </>
    );
}

export default App
