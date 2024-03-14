import React from "react";
import Layout from "../components/layout";
import "./index.scss";
import BlockTitle from "../components/BlockTitle";
import ServiceCard from "../components/card/serviceCard";
import ChoiceLogo from "../images/choice.png";
import ProductCard from "../components/card/productCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chair from "../images/chair.png";
import Desk from "../images/desk.png";
import Lamp from "../images/lamp.png";
import Sofa from "../images/sofa.png";
import { Col, Row } from "react-grid-system";
import Button from "../components/button";
import SofaDesk from "../images/sofa-desk.png";
import Driver from "../images/driver.png";
import TestimonialsCard from "../components/card/testimonialsCard";
import writer1 from "../images/heroImg.png";
import writer2 from "../images/writer2.png";
import vase from "../images/vase.png";
import ArticleCard from "../components/card/articleCard";
import CtaBlock from "../components/CtaBlock";
import Banner from "../components/Banner";
import HeroImg from "../images/banner-image.png";

var settings = {
  focusOnSelect: true,

  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
};

var testimonialsSettings = {
  focusOnSelect: true,

  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
};

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

const index = () => {
  return (
    <Layout pageClass="home-page">

      <Banner
        className="block-banner"
        bannerTitle="Discover Furniture With High Quality Wood"
        bannerDescription="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor."
        BannerImage={HeroImg}
        BannerImageAlt="Home"
      />

      <section className="block-benefits">
        <div className="centered-content">
          <div className="block-benefits__blocktitle">
            <BlockTitle
              className="startTitle"
              blockTitle="Benefits"
              blockSubtitle="Benefits when using our sevices"
            />
          </div>
          <div className="block-benefits__items">
            <ServiceCard
              cardLogo={ChoiceLogo}
              cardTitle="Many Choices"
              cardText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
            />
            <ServiceCard
              cardLogo={ChoiceLogo}
              cardTitle="Many Choices"
              cardText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
            />
            <ServiceCard
              cardLogo={ChoiceLogo}
              cardTitle="Many Choices"
              cardText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. "
            />
          </div>
        </div>
      </section>

      <section className="block-products">
        <div className="block-products__blocktitle">
          <BlockTitle
            className="centerTitle"
            blockTitle="Product"
            blockSubtitle="Our popular product"
          />
          <p className="hh">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="block-products__items">
          <Slider {...settings}>
            <div>
              <ProductCard
                productImg={Desk}
                productTag="Desk"
                productTitle="Wooden Bookshelf"
                productSubtitle="Combination of wood and wool"
                productPrice="$30.33"
              />
            </div>
            <div>
              <ProductCard
                productImg={Chair}
                productTag="Chair"
                productTitle="White Aesthetic Chair"
                productSubtitle="Combination of wood and wool"
                productPrice="$63.47"
              />
            </div>
            <div>
              <ProductCard
                productImg={Lamp}
                productTag="Lamp"
                productTitle="Bardono Smart Lamp"
                productSubtitle="Easy to use with bluetooth connection"
                productPrice="$62.23"
              />
            </div>
            <div>
              <ProductCard
                productImg={Sofa}
                productTag="Sofa"
                productTitle="Sofa Empuk Banget"
                productSubtitle="Using kapuk randu material"
                productPrice="$58.39"
              />
            </div>
          </Slider>
        </div>
      </section>

      <section className="block-experience">
        <div className="centered-content">
          <Row>
            <Col md={12} lg={6}>
              <div className="block-material">
                <BlockTitle
                  className="startTitle"
                  blockTitle="Our Product"
                  blockSubtitle="Crafted by talented and high quality material"
                />
                <p className="block-material__text">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non purus
                  parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                  pulvinar
                </p>
                <Button btnText="Learn More" className="btn-primary" />
                <img src={Driver} alt="driver-image" className="driver-image" />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="block-client">
                <div className="block-client__project">
                  <div>
                    <h3>20+</h3>
                    <span>Years Experience</span>
                  </div>
                  <div>
                    <h3>483</h3>
                    <span>Happy Client</span>
                  </div>
                  <div>
                    <h3>150+</h3>
                    <span>Project Finished</span>
                  </div>
                </div>
                <img src={SofaDesk} alt="sofa-desk-image" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="block-testimonials">
        <div className="centered-content">
          <BlockTitle
            className="centerTitle"
            blockTitle="Testimonials"
            blockSubtitle="What our customer say"
          />
          <p className="block-testimonials__text">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
          <div className="block-testimonials__items">
            <Slider {...testimonialsSettings}>
              <TestimonialsCard
                testimonialWriterImg={writer1}
                testimonialWriter="Janne Cooper"
                testimonialrating="4.3"
              />
              <TestimonialsCard
                testimonialWriterImg={writer2}
                testimonialWriter="Cobocannaeru"
                testimonialrating="4.0"
              />
              <TestimonialsCard
                testimonialWriterImg={writer1}
                testimonialWriter="Berry Gunawan"
                testimonialrating="3.5"
              />
            </Slider>
          </div>
        </div>
      </section>

      <section className="block-articles">
        <div className="centered-content">
          <Row>
            <Col md={12} lg={6}>
              <BlockTitle
                className="startTitle"
                blockTitle="Articles"
                blockSubtitle="The best furniture comes from Lalasia"
              />
              <span className="block-articles__text">
                Pellentesque etiam blandit in tincidunt at donec.{" "}
              </span>
              <img className="vase-img" src={vase} alt="vase-img" />
              <div className="text-in-vase">
                <span style={{ color: "white" }}>Tips and Trick</span>
                <h3 style={{ color: "white" }}>
                  Create Cozy Dinning Room Vibes
                </h3>
                <span style={{ color: "white" }}>
                  Decorating with neutrals brings balance to the dining room...
                </span>
                <p style={{ color: "white" }}>Read More</p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="block-articles__items">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <CtaBlock
        ctaTitle='Join with me to get special discount'
        btnText="Learn More"
        btnLink="/products"
      />

    </Layout >
  );
};

export default index;
