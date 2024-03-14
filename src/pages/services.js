import React from "react";
import Layout from "../components/layout";
import Television from "../images/television.png";
import { Col, Row } from "react-grid-system";
import "./services.scss";
import BlockTitle from "../components/BlockTitle";
import Plant from "../images/plant.png";
import LivingRoomSofa from "../images/livingroomsofa.png";
import Coworking from "../images/coworkingspace.png"

const ServicesPage = () => {
  return (
    <Layout pageClass="services-class">
      <section className="block-banner">
        <div className="centered-content">
          <div className="banner-content">
            <h1>Services</h1>
            <p className="sub-head">
              The product crafted by talented crafter and using high quality
              material with love inside
            </p>
          </div>
          <div className="banner-image">
            <img src={Television} alt="livingroom-logo" />
          </div>
        </div>
      </section>
      <section className="block-services">
        <div className="centered-content">
          <div className="block-content">
            <Row>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>01</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Furniture
                </p>
                <p>
                  At the ultimate smart home, you're met with technology before
                  you even step throught the front door.
                </p>
              </Col>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>02</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Home Decoration
                </p>
                <p>
                  Create A Calming Summer Escape With Our Luxurious Home
                  Accessories For The Balmy Evenins.
                </p>
              </Col>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>03</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Kitchen Cabinet
                </p>
                <p>
                  Introducing the modular kitchen cabinet system. Start with our
                  huge selection of base and wall cabinets.
                </p>
              </Col>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>04</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Interior Design
                </p>
                <p>
                  Innovative products often feature innovative designs that play
                  with the patterns we are familiar.{" "}
                </p>
              </Col>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>05</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Exterior Design
                </p>
                <p>
                  These stylish and resilient products provide up-to-date
                  options for roofing, siding, decking, and outdoor spaces.{" "}
                </p>
              </Col>
              <Col lg={4} md={6} className="services-box">
                <h2 style={{ color: "#518581" }}>06</h2>
                <p style={{ "font-weight": "bold", color: "black" }}>
                  Custom Furniture
                </p>
                <p>
                  With Quality Materials and Modern Designs, we have Designs for
                  all Tastes. we bring you World Class Designs.{" "}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="block-portfolio">
        <div className="centered-content">
          <Row>
            <Col lg={6}>
              <BlockTitle
                blockTitle="Portofolio"
                className="startTitle"
                blockSubtitle="Amazing project we've done before"
              />
            </Col>
            <Col lg={6}>
              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
              <p style={{ color: "#518581", fontWeight: "bold" }}>
                View Portofolio
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
            <img src={Plant}/>
            </Col>
            <Col lg={7}>
            <img src={LivingRoomSofa}/>
            <img src={Coworking}/>
            </Col>
        
          </Row>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
