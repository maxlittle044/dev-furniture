import React from "react";
import "./productCard.scss";
import img from "../../../images/chair.png";

const ProductCard = ({productImg, productTitle, productTag, productSubtitle, productPrice}) => {
  return (
    <div className="card-product">
      <div className="card-product__media">
        <img src={productImg} alt="image" />
      </div>
      <div className="card-product__content">
        <span className="tag">{productTag}</span>
        <h3 className="title">{productTitle}</h3>
        <span className="sub-title">{productSubtitle}</span>
        <h3 className="price">{productPrice}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
