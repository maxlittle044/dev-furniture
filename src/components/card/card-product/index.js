import React from "react";
import "./card-product.scss";
import { Link } from "gatsby";

const ProductCard = ({
  className = "",
  productImg,
  productImgAlt,
  productTitle,
  productTag,
  productSubtitle,
  productPrice,
}) => {
  return (
    <div className={`card-product ${className}`}>
      <Link to="/product/productDetails" className="link-wrapper">
        <div className="card-product__media">
          <img src={productImg} alt={productImgAlt} />
        </div>

        <div className="card-product__content">
          <span className="tag">{productTag}</span>
          <h3 className="title">{productTitle}</h3>
          <span className="sub-title">{productSubtitle}</span>
          <h3 className="price">{productPrice}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
