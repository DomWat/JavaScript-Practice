let post = document.getElementById("post")

const newsItems = news.articles.map((article) => {
    return `
    <li>
    <h1><u><b>${article.title}</b></u></h1>
    <br><label>${article.author}</label>
    <br><p>${article.description}</p>
    <br><a href =${article.url}>Read Here</a>
    <br><img src =${article.urlToImage} height = 200px width = 150px alt = "picture"/>
    <br><label>Published at: ${article.publishedAt}</label>
    </li>
    `
})
post.insertAdjacentHTML('beforeend',newsItems.join(''))