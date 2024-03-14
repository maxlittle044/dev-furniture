import React from "react";
import "../sass/hamburger.scss";

const Hamburger = () => {
  return (
    <button className="hamburger hamburger--squeeze" type="button" aria-label="Mobile Burger">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
