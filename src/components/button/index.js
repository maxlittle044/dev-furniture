import { Link } from "gatsby";
import React from "react";
import "./button.scss";

const Button = ({ linkTo, btnText, className, children }) => {
  return <Link to={linkTo} className={`btn ${className}`}>{btnText}{children}</Link>;
};

export default Button;
