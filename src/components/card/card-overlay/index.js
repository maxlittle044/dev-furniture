import React from "react";
import './card-overlay.scss';
import { Link } from "gatsby";

const CardOverlay = (
    {
        cardLink,
        className = '',
        productImg,
        productImgAlt,
        productSubTitle,
        productTitle,
        productContent,
    }
) => {
    return (
        <div className={`card-overlay ${className}`}>
            <div className="card-overlay__media">
                <img src={productImg} alt={productImgAlt} />
            </div>

            <div className="card-overlay__content">
                <h3 className="title">
                    <span className="sub-title">{productSubTitle}</span>
                    {productTitle}
                </h3>
                <p>{productContent}</p>

                <div className="card-overlay__link">
                    <Link to={cardLink} className="read-more-btn stretched-link">
                        Read More
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CardOverlay;