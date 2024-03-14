import React from "react";
import siteLogo from "../images/site-logo.svg";
import useDeviceSize from "../hooks/use-device-size";
import { Link } from "gatsby";
import Hamburger from "./hamBurger";
import bagImg from "../images/bag.svg";
import userImg from "../images/user.svg";
import Nav from "./nav";

const Header = () => {
  const deviceSize = useDeviceSize();
  return (
    <header className="site-header">
      <div className="centered-content">
        <div className="navbar-container">
          <div className="site-header__logo">
            <Link to="/" className="navbar-logo">
              <img src={siteLogo} alt="LalasiaLogo" />
            </Link>
          </div>
          
          {deviceSize.mdDown && <Hamburger />}
          {!deviceSize.mdDown && <Nav />}

          <div className="nav-profile desktop-only">
            <div>
              <img src={bagImg} alt="bag-image" />
            </div>
            <div>
              <img src={userImg} alt="user-image" />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
