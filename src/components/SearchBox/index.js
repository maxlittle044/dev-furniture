import React from "react";
import "./searchbox.scss";
import Button from "../button";
import searchIcon from "../../images/search.svg"

const SearchBox = ({ btnText }) => {
  return (
    <div className="search-container">
      <div className="search-wrap">
        <img src={searchIcon} alt="bag-icon" className="input-icon" />
        <input type="text" placeholder="Search property" name="search" />
        <Button btnText={btnText} className="btn-primary" />
      </div>
    </div>
  );
};

export default SearchBox;
