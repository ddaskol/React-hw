import React from "react";
import ReactDOM from 'react-dom'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import App from "./App/App";
import AboutUs from "./App/Main/AboutUs/AboutUs";
import ActiveArticle from "./App/Main/ActiveArticle/ActiveArticle";
import articles from "./App/Main/Blog/articles";
import Blog from "./App/Main/Blog/Blog";


export async function articleLoader({ params }) {
    // const contact = await getContact(params.contactId);
    // return { contact };

    const article = articles.find(({ id }) => id == params.id)
    console.log({ article })
    console.log(article)
    return { article }

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h2>Error Page</h2>,
        children: [
            {
                element: <Blog />,
                index: true,
            },
            {
                path: "/article/:id",
                element: <ActiveArticle />,
                loader: articleLoader,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },


        ]
    },
]);



ReactDOM.render(
    <RouterProvider router={router} />
    , document.getElementById("root"))




