import React from "react";
import "./serviceCard.scss";

const ServiceCard = ({ cardLogo, cardTitle, cardText }) => {
  return (
    <div className="service-card">
      <div className="service-card__logo">
        <img src={cardLogo} alt="card-logo" />
      </div>
      <div className="service-card__info">
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
