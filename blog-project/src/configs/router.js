import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

import App from '../App/App';

// import Blog from '../modules/Blog/Blog';
// import ActiveArticle from '../modules/ActiveArticle/ActiveArticle';
// import AboutUs from '../modules/AboutUs/AboutUs';

import articles from "../modules/Blog/articles";

const Blog = React.lazy(() => import('../modules/Blog/Blog'))
const AboutUs = React.lazy(() => import('../modules/AboutUs/AboutUs'))
const ActiveArticle = React.lazy(() => import('../modules/ActiveArticle/ActiveArticle'))

export async function articleLoader({ params }) {
    const article = articles.find(({ id }) => id == params.id)
    return { article }

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h2>Error Page</h2>,
        children: [
            {
                element: <Suspense fallback={<>Loading</>}><Blog /></Suspense>,
                index: true,
            },
            {
                path: "/article/:id",
                element:  <Suspense fallback={<>Loading</>}><ActiveArticle /></Suspense>,
                loader: articleLoader,
            },
            {
                path: "/about",
                element:  <Suspense fallback={<>Loading</>}><AboutUs /></Suspense>,
            },
        ]
    },
]);

export default router