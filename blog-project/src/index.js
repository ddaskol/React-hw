import React from "react";
import ReactDOM from 'react-dom'

import "./common/styles/reset.css"
import "./common/styles/base.css"

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}


ReactDOM.render(<App />, document.getElementById("root"))