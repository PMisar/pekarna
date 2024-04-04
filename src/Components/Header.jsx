import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../assets/header-image.jpg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container" id="header">
          <img src={BannerImage} alt="" />
          <div className="header-text">
            <span className="large-text">Pekárna</span>
            <br />
            <span className="small-text">Větrný Jeníkov</span>
          </div>
        </div>
      </div>
      </>
  );
};

export default Header;