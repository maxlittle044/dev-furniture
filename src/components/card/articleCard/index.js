import React from "react";
import cardArticleImg from "../../../images/card-article.png";
import writerImg from "../../../images/writer_image.png"
import './articleCard.scss';

const ArticleCard = () => {
  return (
    <div className="card-article">
      <div className="card-article__media">
        <img src={cardArticleImg} alt="articleImg" />
      </div>
      <div className="card-article__content">
        <span className="tag">Tips and Trick</span>
        <h3 className="title">6 ways to give your home minimalistic vibes</h3>
        <span className="sub-title">Pellentesque etiam blandit in..</span>
        <div className="writer-details">
          <img className="writer-details__photo"  src={writerImg} />
          <span className="writer-details__name">By Jerremy Jean</span>
          <span className="writer-details__date">Friday,1 April 2022</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
