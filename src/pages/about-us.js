import React from "react";
import Layout from "../components/layout";
import "./aboutUs.scss";
import Video from "../images/video.png";
import { Col, Row } from "react-grid-system";
import BlockTitle from "../components/BlockTitle";
import CustomerServiceCard from "../components/card/card-customer-service";
import CallIcon from "../images/call-received.png";
import TeamCard from "../components/card/card-team";
import member1 from "../images/member1.png";
import member2 from "../images/member2.png";
import member3 from "../images/member3.png";
import member4 from "../images/member4.png";
import member5 from "../images/member5.png";
import member6 from "../images/member6.png";
import CtaBlock from "../components/CtaBlock";

const AboutUsPage = () => {
  return (
    <Layout pageClass="about-page">
      <section className="block-banner">
        <div className="centered-content">
          <div className="banner-content">
            <h1>About Us</h1>
            <p className="sub-head">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <div className="banner-video">
            <img src={Video} alt="test" />
          </div>
        </div>
      </section>
      <section className="block-mission">
        <div className="centered-content">
          <div className="mission-content">
            <Row>
              <Col lg={6}>
                <BlockTitle
                  className="startTitle"
                  blockTitle="Our Mission"
                  blockSubtitle="Our team dedicated to help find  smart home product"
                />
                <div className="work-experience">
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
              </Col>
              <Col lg={6}>
                <CustomerServiceCard
                  cardIcon={CallIcon}
                  cardTitle="24/7 Supports"
                  cardSubtitle="24/7 support means a support service that is provided 24 hours a day and 7 days a week. "
                />
                <CustomerServiceCard
                  cardIcon={CallIcon}
                  cardTitle="Free Consultation"
                  cardSubtitle="A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible"
                />
                <CustomerServiceCard
                  cardIcon={CallIcon}
                  cardTitle="Overall Guarantee"
                  cardSubtitle="The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. "
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="block-team">
        <div className="centered-content">
          <div className="team-content">
            <Row>
              <Col lg={6}>
                <BlockTitle
                  className="startTitle"
                  blockTitle="Our Team"
                  blockSubtitle="Meet our leading and strong team"
                />
              </Col>
              <Col lg={6}>
                <p className="sub-head">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non purus
                  parturient.
                </p>
              </Col>
            </Row>
            <Row className="team-content__members">
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member1}
                  memberName="Jesse Depp"
                  memberPosition="Founder & CEO"
                />
              </Col>
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member2}
                  memberName="Margareth Carter"
                  memberPosition="COO"
                />
              </Col>
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member3}
                  memberName="Andrew Taggart"
                  memberPosition="Developer"
                />
              </Col>
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member4}
                  memberName="Grace Marie"
                  memberPosition="Manager"
                />
              </Col>
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member5}
                  memberName="Jesse Depp"
                  memberPosition="Senior Designer"
                />
              </Col>
              <Col lg={4} md={6}>
                <TeamCard
                  memberImage={member6}
                  memberName="Jesse Depp"
                  memberPosition="Marketer"
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <CtaBlock
          ctaTitle='Are you interested
          work with us?'
          btnText="Let's Talk"
          btnLink="/products"
        />
    </Layout>
  );
};

export default AboutUsPage;
