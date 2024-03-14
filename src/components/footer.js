import React from "react";
import footerLogo from "../images/site-footer-logo.svg";
import { Col, Row } from "react-grid-system";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="centered-content">
        <div className="site-footer__wrapper">
          <Row justify="between">
            <Col lg={5}>
              <div className="site-footer__left">
                <div className="site-footer__logo">
                  <Link to="/">
                    <img src={footerLogo} alt="lalasia-logo" />
                  </Link>
                </div>
                <div className="site-footer__description">
                  <p>Lalasia is digital agency that help you make better experience iaculis cras in.</p>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="site-footer__nav">

                <div className="site-footer__navItem">
                  <h4>
                    <Link to="/product">
                      Product
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <Link to="/product/new-arrivals">New Arrivals
                      </Link>
                    </li>

                    <li>
                      <Link to="/product/best-selling">
                        Best Selling
                      </Link>
                    </li>

                    <li>
                      <Link to="/product/home-decor">
                        Home Decor
                      </Link>
                    </li>

                    <li>
                      <Link to="/product/kitchen-set">
                        Kitchen Set
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="site-footer__navItem">
                  <h4>
                    <Link to="/services">
                      Services
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <Link to="/services/catalog">
                        Catalog
                      </Link>
                    </li>

                    <li>
                      <Link to="/services/blog">
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link to="/services/faq">
                        FaQ
                      </Link>
                    </li>

                    <li>
                      <Link to="/services/pricing">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="site-footer__navItem">
                  <h4>Follow Us</h4>
                  <ul>
                    <li>
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </li>

                    <li>
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </li>

                    <li>
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
