import React, { useState } from "react";
import Layout from "../../components/layout";
import "./product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBanner1 from "../../images/product-banner-1.png";
import Button from "../../components/button";
import SearchBox from "../../components/SearchBox";
import FilterImg from "../../images/filter.png";
import { Col, Row } from "react-grid-system";
import ProductCard from "../../components/card/card-product";
import Desk from "../../images/desk.png";
import ProductList from "../../productlist/productlist";
import ReactPaginate from "react-paginate";
import LeftArrow from "../../images/leftarrow.png";
import RightArrow from "../../images/rightarrow.png";

const ProductPage = () => {
  const products = ProductList();
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 9;
  const productsVisited = pageNumber * productsPerPage;
  const displayProducts = products.slice(
    productsVisited,
    productsVisited + productsPerPage
  );

  const productCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Layout pageClass="product-page">
      <section className="block-banner">
        <div className="banner-content">
          <h1>Products</h1>
          <p className="sub-head">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div className="banner-image">
          <div className="image-slider">
            <Slider {...settings}>
              <img src={ProductBanner1} className="productbannerimage" />
              <img src={ProductBanner1} className="productbannerimage" />
              <img src={ProductBanner1} className="productbannerimage" />
              <img src={ProductBanner1} className="productbannerimage" />
            </Slider>
            <div className="sale-offer">
              <Button btnText="Discount" className="btn-primary" />
              <h2>Ramadhan Sale Offer</h2>
              <p>Get 40% off for the first transaction on Lalasia</p>
            </div>
          </div>
        </div>
      </section>
      <section className="block-product">
        <div className="centered-content">
          <div className="product-searchbox">
            <SearchBox btnText="Find Now" />
            <div className="filter-box">
              <img src={FilterImg} />
              <p>Filter</p>
            </div>
          </div>

          <div className="product-items">
            <span className="product-items__title">Total Product</span>{" "}
          <span className="product-items__count">{products.length}</span>
            <Row className="product-items-row">
              {displayProducts.map((product) => {
                return (
                  <Col lg={4} md={6} style={{ marginBottom: "30px" }}>
                    <ProductCard
                      productImg={product.productImg}
                      productTag={product.productTag}
                      productTitle={product.productTitle}
                      productSubtitle={product.productSubTitle}
                      productPrice={product.productPrice}
                    />
                  </Col>
                );
              })}
            </Row>
            <ReactPaginate
              previousLabel={<img src={LeftArrow} />}
              nextLabel={<img src={RightArrow} />}
              pageCount={productCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
