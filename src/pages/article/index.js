import React from "react";
import Layout from "../../components/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleBannerImage from "../../images/articleBannerImage.png";
import "./article.scss";
import { Col, Row } from "react-grid-system";
import HeadlineImg1 from "../../images/headlineImg1.png";
import HeadlineImg2 from "../../images/headlineImg2.png";
import HeroImg from "../../images/imgHero.png";
import BlockTitle from "../../components/BlockTitle";
import SortImg from "../../images/sort.png";
import TrendingCard from "../../components/card/trendingCard";
import TrendingChair from "../../images/trendingchair.png";
import TrendingComb from "../../images/trendingcomb.png";
import TrendingKitchen from "../../images/trendingkitchen.png";
import Button from "../../components/button";
import CtaBlock from "../../components/CtaBlock";
import { Link } from "gatsby";

const ArticlePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout pageClass="article-page">
      <section className="block-banner">
        <div className="centered-content">
          <div className="banner-content">
            <h1>Article</h1>
            <p className="sub-head">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <div className="banner-image">
            <div className="banner-image__slider">
              <Slider {...settings}>
                <img src={ArticleBannerImage} alt="articleBannerImage" />
                <img src={ArticleBannerImage} alt="articleBannerImage" />
                <img src={ArticleBannerImage} alt="articleBannerImage" />
              </Slider>
              <div className="banner-image__article">
                <p>Tips and Trick</p>
                <h3>
                  This 400-Square-Foot New York Apartment Is Maximized With
                  Custom Millwork
                </h3>
                <div className="article-writer">
                  <span>By Morgan Goldberg</span>
                  <span>Tuesday, 17 May 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block-news">
        <div className="centered-content">
          <div className="news-content">
            <BlockTitle
              className="startTitle"
              blockTitle="Today top headlines"
              blockSubtitle="Daily News"
            />
            <Link to="/article/articleDetails" className="link-wrapper">
              <Row>
                <Col md={6}>
                  <div className="news-content__headlines">
                    <img src={HeadlineImg1} alt="headline" />
                    <span>Design Inspiration</span>
                    <p className="headline-title">
                      Bedroom Design is the Most Personal Reflection of the
                      Owner, Really?
                    </p>
                    <p>
                      Is it true that the bedroom design is the most personal
                      reflection of the owner? Many people believe that to be
                      able to judge a person's personality, it is enough to
                    </p>
                    <div className="headline-writer">
                      <img src={HeroImg} alt="writer" />
                      <span className="headline-writer__name">
                        By Jenny Agnes
                      </span>
                      <span>Tuesday, 17 May 2022</span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="news-content__headlines">
                    <img src={HeadlineImg2} alt="headline" />
                    <span>Tips and Trick</span>
                    <p className="headline-title">
                      Create a non-monotonous and dynamic interior atmosphere
                      with these 9 variations of wall tiles
                    </p>
                    <p>
                      Quoted from The Healthy Home Economist, a study in 1932
                      stated that color doesn't really have to be visible to
                      have an effect The radiance of a
                    </p>
                    <div className="headline-writer">
                      <img src={HeroImg} alt="writer" />
                      <span className="headline-writer__name">
                        By Juliana Athorn
                      </span>
                      <span>Wednesday, 22 January 2022</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Link>
          </div>
        </div>
      </section>
      <section className="block-trendingTopics">
        <div className="centered-content">
          <div className="trendingTopics-content">
            <BlockTitle
              className="startTitle"
              blockTitle="Popular last week"
              blockSubtitle="Trending Topics"
            />
            <div className="trendingTopics-content__filter">
              <ul className="filter-item">
                <li>All</li>
                <li>Tips and Trick</li>
                <li>Interior Design</li>
                <li>Design Inspiration</li>
                <li>Color Guide</li>
              </ul>
              <div className="btn-filter">
                <img src={SortImg} alt="sort icon" />
                <p>Filter</p>
              </div>
            </div>
            <div className="trendingTopics-content__card">
              <TrendingCard
                cardImg={TrendingChair}
                cardTag="Tips and Trick"
                cardTitle="Beautiful and Functional Home Terrace Decoration"
                cardSubtitle="Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space."
                cardHeroImg={HeroImg}
                cardWriter="By Morgan Goldberg"
                cardDate="Friday, 1 April 2022"
              />
              <TrendingCard
                cardImg={TrendingComb}
                cardTag="Design Inspiration"
                cardTitle="Modern Minimalist Home Design: Aesthetics of Modern Home Interiors"
                cardSubtitle="Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space."
                cardHeroImg={HeroImg}
                cardWriter="By Rizal Ahmad"
                cardDate="Wednesday, 17 March 2022"
              />
              <TrendingCard
                cardImg={TrendingKitchen}
                cardTag="Color Guide"
                cardTitle="20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun"
                cardSubtitle="Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space."
                cardHeroImg={HeroImg}
                cardWriter="By Filipus Pendi"
                cardDate="Saturday, 29 February 2022"
              />
            </div>
            <div className="btn-loadmore">
              <Button btnText="Load More" className="btn-secondary" />
            </div>
          </div>
          <CtaBlock
            ctaTitle="Subscribe our newsletter"
            btnText="Let's Talk"
            btnLink="/product"
          />
        </div>
      </section>
    </Layout>
  );
};

export default ArticlePage;
