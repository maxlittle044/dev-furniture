import React from "react";
import "./serviceBox.scss";

const ServiceBox = ({SerialNumber, ServiceTitle, ServiceDescription}) => {
  return (
    <div className="box-service">
      <div className="box-service__content">
        <h2>{SerialNumber}</h2>
        <p style={{marginBottom: '20px'}}>{ServiceTitle}</p>
        <span>{ServiceDescription}</span>
      </div>
    </div>
  );
};

export default ServiceBox;
