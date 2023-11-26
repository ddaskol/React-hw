export const fetchArticles = async () => {
    const response = await fetch("/data/articles.json");
    const articles = await response.json();
    return articles
}
// export const fetchArtices = () => {
//     return fetch("/data/articles.json").then(response => {
//         return response.json().then(data => data)
//     })

// }

// /api/articles /

//     /api/articles / article