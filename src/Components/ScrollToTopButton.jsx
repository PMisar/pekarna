import React, { useState, useEffect } from "react";
import ArrowUp from "../assets/arrow-up.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <img src={ArrowUp} alt="Scroll to Top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;