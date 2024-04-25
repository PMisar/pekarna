import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/header-image.jpg";

const Header = () => {
  return (
    <>
      <div className="home-banner-container" id="header">
        <img src={BannerImage} alt="" />
        <Link to="/" className="header-text">
          <span className="large-text">Pekárna</span>
          <br />
          <span className="small-text">Větrný Jeníkov</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
