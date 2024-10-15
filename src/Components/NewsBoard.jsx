import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1fb3a8d317d449b2a6f294d75f8fa9c3`;

    fetch(url)
      .then((response) => {
        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>{error}</p>
      ) : articles && articles.length > 0 ? (
        <div className="row">
          {articles.map((news, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No news articles available</p>
      )}
    </div>
  );
};

export default NewsBoard;
