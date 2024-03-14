import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <div className="navbar-nav">
      <ul className="nav-content">
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
