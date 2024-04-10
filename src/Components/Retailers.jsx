import React from "react";
import ThreeInOne from "../assets/3v1.png";

const Retailers = () => {
  return (
    <div className="retailers-container" id="retailers">
      <h2>Kde koupíte naše pečivo</h2>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1uqQQCRdT2ZkHu8BY6A6N0uKgVx4xl-s&ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
      <img src={ThreeInOne} alt="" />
    </div>
  );
};

export default Retailers;
