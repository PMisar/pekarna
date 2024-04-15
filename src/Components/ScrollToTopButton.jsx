import React from "react";
import ArrowUp from "../assets/arrow-up.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <img src={ArrowUp} alt="Scroll to Top" />
    </button>
  );
};

export default ScrollToTopButton;