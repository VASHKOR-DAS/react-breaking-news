import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeader = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=35acf0f6d5d24ea5890c99906a98ec6f'
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines : {articles.length}</h1>

            {
                articles.map(article =>
                        <News
                        
                        title = {article.title}
                        description = {article.description}
                        
                        ></News>
                    )
            }
        </div>
    );
};

export default TopHeader;