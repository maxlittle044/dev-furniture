import React from "react";
import './card-article.scss';
import { Link } from "gatsby";

const CardArticle = (
  {
    url,
    className = '',
    articleImg,
    articleImgAlt,
    articleTag,
    articleTitle,
    articleContent,
    authorImg,
    authorImgAlt,
    authorName,
    articleDate
  }
) => {
  return (
    <div className={`card-article ${className}`}>
      <div className="card-article__media">
        <img src={articleImg} alt={articleImgAlt} />
      </div>

      <div className="card-article__content">
        <span className="tag">{articleTag}</span>
        <h3 className="title">{articleTitle}</h3>
        <div className="show-desktop">
          <p>{articleContent}</p>
        </div>

        <div className="author-info">
          <div className="author-info__title">
            <img
              src={authorImg}
              alt={authorImgAlt}
              className="avatar"
            />
            <h4 className="author-name">By {authorName}</h4>
          </div>

          <div className="author-info__date">
            <span className="post-date">{articleDate}</span>
          </div>
        </div>
      </div>

      <div className="btn-link">
        <Link to={url} className="stretched-link">
        </Link>
      </div>
    </div>
  );
};

export default CardArticle;
