import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";



import App from "./App/App";







ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("root"))



// Q: як прокинути DefaultMenu, щоб в BurgerMenu не прописувати його заново 
