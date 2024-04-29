import React from "react";
import CollageImage from "../assets/collage.png";

const Retailers = () => {
  return (
    <div className="retailers-container" id="retailers">
      <h2>Kde koupíte naše pečivo</h2>
      <iframe src="https://www.google.com/maps/d/embed?mid=1uqQQCRdT2ZkHu8BY6A6N0uKgVx4xl-s&ehbc=2E312F" />
      <img src={CollageImage} alt="Koláž obrázků ukazujících produkci pečiva" />
    </div>
  );
};

export default Retailers;
