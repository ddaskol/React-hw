import React from "react";
import "../common/styles/reset.css"
import "../common/styles/base.css"

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

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
