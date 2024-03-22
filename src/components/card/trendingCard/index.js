import React from "react";
import "./trendingCard.scss";

const TrendingCard = ({
  cardImg,
  cardImgAlt,
  cardTag,
  cardTitle,
  cardSubtitle,
  cardHeroImg,
  cardHeroImgAlt,
  cardWriter,
  cardDate,
}) => {
  return (
    <div className="card-trending">
      <div className="card-trending__media">
        <img src={cardImg}  alt={cardImgAlt}/>
      </div>
      <div className="card-trending__content">
        <span className="tag">{cardTag}</span>
        <h3 className="title">{cardTitle}</h3>
        <span className="sub-title">{cardSubtitle}</span>
        <div className="writer-details">
          <img className="writer-details__photo" src={cardHeroImg} alt={cardHeroImgAlt} />
          <span className="writer-details__name">{cardWriter}</span>
          <span className="writer-details__date">{cardDate}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
