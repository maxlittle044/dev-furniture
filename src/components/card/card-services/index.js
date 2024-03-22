import React from "react";
import "./card-services.scss";

const ServiceCard = ({ className = '', cardIcon, cardIconAlt, cardTitle, cardText }) => {
  return (
    <div className={`card-services ${className}`}>
      <div className="card-services__icon">
        <img src={cardIcon} alt={cardIconAlt} />
      </div>
      
      <div className="card-services__info">
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
      </div>
    </div >
  );
};

export default ServiceCard;
