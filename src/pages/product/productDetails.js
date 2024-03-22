import React from "react";
import "./productDetails.scss";
import Layout from "../../components/layout";
import { Col, Row } from "react-grid-system";
import product1 from "../../images/chair.png";
import Button from "../../components/button";
import ProductCard from "../../components/card/card-product";
import Clock from "../../images/clock.png";

const ProductDetailsPage = () => {
  return (
    <Layout pageClass="productDetails_page">
      <section className="block-productdetails">
        <div className="centered-content">
          <div className="productdetails-content">
            <Row>
              <Col md={6}>
                <div className="productdetails-content__media">
                  <img src={product1} />
                </div>
              </Col>
              <Col md={6}>
                <div className="productdetails-content__content">
                  <h2>White Aesthetic Chair</h2>
                  <p className="subtitle">Combination of wood and wool</p>
                  <div className="colors">
                    <p>Color</p>
                    <ul className="colors__options">
                      <li style={{ backgroundColor: "#151411" }}></li>
                      <li style={{ backgroundColor: "#314443" }}></li>
                      <li style={{ backgroundColor: "#C5A26E" }}></li>
                      <li style={{ backgroundColor: "#D8DBE0" }}></li>
                    </ul>
                  </div>
                  <p>
                    Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
                    facilisis facilisis ligula felis et a parturient aenean. Ac
                    maecenas ultricies felis risus scelerisque duis posuere...
                  </p>
                  <h3 className="product-price">$99.98</h3>
                  <div className="btn-buy">
                    <Button btnText="Buy Now" className="btn-primary" />
                    <Button btnText="Add to Cart" className="btn-secondary" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="block-relateditems">
        <div className="centered-content">
          <div className="relateditems-content">
            <h3>Related Items</h3>
            <div className="relateditems-content__product">
              <Row>
                <Col md={4}>
                  <ProductCard
                    productImg={Clock}
                    productTitle="Decoration"
                    productTag="Wooden Aesthetic Chair"
                    productSubtitle="Combination of wood and wool"
                    productPrice="$58.39"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    productImg={Clock}
                    productTitle="Decoration"
                    productTag="Wooden Aesthetic Chair"
                    productSubtitle="Combination of wood and wool"
                    productPrice="$58.39"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    productImg={Clock}
                    productTitle="Decoration"
                    productTag="Wooden Aesthetic Chair"
                    productSubtitle="Combination of wood and wool"
                    productPrice="$58.39"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailsPage;
