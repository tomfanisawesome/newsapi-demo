(async function () {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-12&sortBy=publishedAt&apiKey=4de55662209e4bce9cf4cbfb39c5ea7f';
    const response = await fetch(url);
    const myJson = await response.json();
    const articles = myJson.articles;
    console.log(articles);
    articles.forEach(item => {
        var newsContainer = document.getElementById('news-container');
        newsContainer.insertAdjacentHTML('beforeend', `
                <div class="column is half-tablet is-half-desktop ">
                    <article class="message is-primary">
                        <div class="message-header">
                            <p>${item.title}</p>
                        </div>
                        <div class="message-body">
                            ${item.content}
                        </div>
                    </article>
                </div>`
        )

    });


})(); 