import React from "react";
import "./card-customer-service.scss";

const CustomerServiceCard = ({ cardIcon, cardIconAlt, cardTitle, cardSubtitle }) => {
  return (
    <section className="block-service">
      <img src={cardIcon} alt={cardIconAlt} />
      <div className="block-service__content">
        <h3>{cardTitle}</h3>
        <p>{cardSubtitle}</p>
      </div>
    </section>
  );
};

export default CustomerServiceCard;
