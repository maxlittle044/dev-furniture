import React from "react";
import "./articleDetails.scss";
import Bedroom from "../../images/bedroom.png";
import Layout from "../../components/layout";
import Banner from "../../components/Banner";
import Article1Img from "../../images/article1img.png";
import { Col, Row } from "react-grid-system";
import Bedroom2 from "../../images/bedroom2.png";
import BlockTitle from "../../components/BlockTitle";
// import ProductCard from "../../components/card/card-product";
import ProductImg1 from "../../images/productimg1.png";
import HeroImg from "../../images/heroImg.png";

const articleDetailsPage = () => {
  return (
    <Layout pageClass="articledetails-page">
      <Banner
        bannerTitle="Bedroom Design is the Most Personal
    Reflection of the Owner, Really?"
        bannerDescription="Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to"
        BannerImage={Bedroom}
        BannerImageAlt="Home"
      />
      <section className="block-articledetails">
        <div className="centered-content">
          <div className="articledetails-content">
            <Row>
              <Col lg={6}>
                <p>
                  Commodo sodales at eget id dignissim amet consectetur
                  adipiscing elit. At cursus magna libero turpis scelerisque
                  tristique scelerisque mi. Sed nunc auctor faucibus vitae.
                  Gravida erat nisi sed vulputate sed cum viverra enim pretium.
                  Sed nunc consequat, tincidunt pharetra. Mattis quis egestas
                  mi, malesuada morbi morbi porttitor porttitor. Faucibus nunc,
                  turpis malesuada blandit feugiat porttitor feugiat
                  pellentesque condimentum. At nisi, cursus sem blandit sed nunc
                  phasellus. Placerat auctor tincidunt commodo auctor placerat
                  viverra tortor quis eu. Pretium velit eu, massa tristique
                  congue egestas. In arcu tellus tellus urna, orci gravida etiam
                  velit, viverra. Convallis nunc sed tellus eget feugiat
                  ultricies purus. Consectetur sollicitudin id eget facilisis
                  hendrerit nibh.
                </p>
                <p>
                  Nisi quam mi est et et. Lectus sed imperdiet non vestibulum
                  volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis
                  sagittis, consequat, iaculis tortor bibendum. At nisl, diam a
                  sagittis nulla nec at. Faucibus ultricies pharetra, faucibus
                  erat varius ornare. Viverra pharetra nibh leo et purus in et.
                  Amet felis lectus consectetur duis ut orci. Sed vitae quam vel
                  pretium urna, duis neque. Vitae commodo interdum adipiscing mi
                  ultrices. Aliquam risus nibh tincidunt mauris faucibus gravida
                  eleifend.
                </p>
                <p>
                  Ornare tincidunt gravida sed adipiscing vel adipiscing turpis
                  neque elementum. Donec duis malesuada quam vehicula. Mauris
                  sem tellus vitae cursus pellentesque semper nam est erat.
                  Vulputate dui nisi neque, morbi mauris id augue. Habitant
                  ultrices egestas vitae eget mattis ipsum sed. Ornare porttitor
                  lobortis mauris nulla et vitae risus augue commodo. Nunc
                  placerat nascetur semper est facilisis. Arcu cum aliquam vitae
                  sit ultrices. Aliquet amet elit nibh sapien a. Id eu sagittis
                  est eu ornare.
                </p>
              </Col>
              <Col lg={6}>
                <p>
                  Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
                  facilisis facilisis ligula felis et a parturient aenean. Ac
                  maecenas ultricies felis risus scelerisque duis posuere.
                  Lectus tellus montes, ac sed diam. Habitant amet, leo cras dui
                  ac eu magna.
                </p>
                <p>
                  Sed neque lorem mi laoreet orci aliquam maecenas. Molestie
                  enim, nulla egestas id metus quisque eget. Tempor ante
                  hendrerit venenatis et pellentesque viverra. Ornare mattis dui
                  viverra suspendisse habitant tempus ornare aliquam.
                  Condimentum tellus cursus diam interdum. Quam dictum
                  pellentesque vestibulum mi. Aliquet laoreet sem proin viverra
                  nec, at. Malesuada aliquam quisque felis, faucibus. Diam duis
                  nunc tincidunt integer risus sit parturient urna. Etiam sed id
                  nisi, tempus fames. Tempor ultrices massa eleifend id aliquet
                  integer. Phasellus felis convallis fames habitasse sagittis,
                  dui tellus.
                </p>
                <img src={Article1Img} alt="test" />
              </Col>
            </Row>
            <h3>Bedroom Collection</h3>
            <Row>
              <Col lg={6}>
                <p>
                  Nisi quam mi est et et. Lectus sed imperdiet non vestibulum
                  volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis
                  sagittis, consequat, iaculis tortor bibendum. At nisl, diam a
                  sagittis nulla nec at. Faucibus ultricies pharetra, faucibus
                  erat varius ornare. Viverra pharetra nibh leo et purus in et.
                  Amet felis lectus consectetur duis ut orci.
                </p>
              </Col>
              <Col lg={6}>
                <p>
                  Praesent tempus vel urna suspendisse cursus. Ac proin vitae
                  viverra lorem nulla mattis in. Urna diam accumsan quisque
                  adipiscing sagittis, in. Adipiscing dolor, morbi placerat sit
                  vitae ipsum amet consequat. Imperdiet lacus tempus, nibh eget
                  metus, sed pellentesque mattis aenean.
                </p>
              </Col>
            </Row>
            <img src={Bedroom2} alt="bedroom" />
            <h3>The Knot</h3>
            <Row>
              <Col lg={6}>
                <p>
                  Nisi quam mi est et et. Lectus sed imperdiet non vestibulum
                  volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis
                  sagittis, consequat, iaculis tortor bibendum. At nisl, diam a
                  sagittis nulla nec at. Faucibus ultricies pharetra, faucibus
                  erat varius ornare. Viverra pharetra nibh leo et purus in et.
                  Amet felis lectus consectetur duis ut orci.
                </p>
              </Col>
              <Col lg={6}>
                <p>
                  Nisi quam mi est et et. Lectus sed imperdiet non vestibulum
                  volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis
                  sagittis, consequat, iaculis tortor bibendum. At nisl, diam a
                  sagittis nulla nec at. Faucibus ultricies pharetra, faucibus
                  erat varius ornare. Viverra pharetra nibh leo et purus in et.
                  Amet felis lectus consectetur duis ut orci.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="block-articlerecommendation">
        <div className="centered-content">
          <div className="articlerecommendation-content">
            <BlockTitle className="centerTitle" blockTitle="Similar Topics" blockSubtitle="Maybe you're interested" />
            <Row>
              <Col md={4}>
                <div className="news-content__headlines">
                  <img src={ProductImg1} alt="headline" />
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
                    <img src={HeroImg} alt="hero banner"/>
                    <span className="headline-writer__name">
                      By Jenny Agnes
                    </span>
                    <span>Tuesday, 17 May 2022</span>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news-content__headlines">
                  <img src={ProductImg1} alt="headline" />
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
                    <img src={HeroImg} alt="hero banner" />
                    <span className="headline-writer__name">
                      By Juliana Athorn
                    </span>
                    <span>Wednesday, 22 January 2022</span>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news-content__headlines">
                  <img src={ProductImg1} alt="headline" />
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
                    <img src={HeroImg} alt="test" />
                    <span className="headline-writer__name">
                      By Jenny Agnes
                    </span>
                    <span>Tuesday, 17 May 2022</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default articleDetailsPage;
