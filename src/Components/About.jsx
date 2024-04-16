// import React from "react";
// import AboutImage from "../assets/about-image.jpg";
// import AboutImage2 from "../assets/about-image2.jpg";

// const About = () => {
//   return (
//     <div className="about-container" id="about">
//       <h2>O nás</h2>
//       <div className="first-part">
//         <p className="about-text fade-left">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
//           elementum, felis a ultricies ultricies, tellus augue efficitur ligula,
//           eget ornare tellus odio vel velit. Mauris vel scelerisque ante. Ut
//           vitae felis dapibus, hendrerit lectus id, auctor urna. Curabitur ex
//           mauris, sagittis in turpis sit amet, ultricies imperdiet felis.
//           Praesent tempus neque vitae erat varius, non molestie velit bibendum.
//           In ac blandit lorem. Sed non imperdiet est. In vestibulum ligula sed
//           purus convallis condimentum.
//         </p>
//         <img src={AboutImage} alt="Holding Dough Image" />
//       </div>
//       <div className="second-part">
//         <img src={AboutImage2} alt="Falling Flour Image" />
//         <div className="background-rectangle">
//           <p className="about-text fade-right">
//             Mauris convallis lacus ut arcu pellentesque, eget pellentesque
//             sapien feugiat. Aliquam erat volutpat. In tincidunt aliquet
//             convallis. In hac habitasse platea dictumst. Nam posuere nunc quis
//             neque hendrerit congue. Ut venenatis gravida metus, id aliquet diam
//             luctus eget. Sed metus felis, blandit eu elementum in, condimentum
//             vitae nulla. Morbi a eros pellentesque nibh aliquam cursus. Ut est
//             ligula, finibus at nisi ut, aliquam rhoncus mi. Nam cursus, sapien
//             id tristique lobortis, nulla nunc luctus odio, in ornare enim enim a
//             arcu.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useRef, useEffect } from "react";
import AboutImage from "../assets/about-image.jpg";
import AboutImage2 from "../assets/about-image2.jpg";

const About = () => {
  const firstPartRef = useRef(null);
  const secondPartRef = useRef(null);

  const handleScroll = () => {
    const firstPart = firstPartRef.current;
    const secondPart = secondPartRef.current;

    if (firstPart && secondPart) {
      const firstPartTop = firstPart.getBoundingClientRect().top;
      const secondPartTop = secondPart.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Checking if the element is in the viewport
      if (firstPartTop < windowHeight) {
        firstPart.classList.add("fade-left");
      }
      if (secondPartTop < windowHeight) {
        secondPart.classList.add("fade-right");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container" id="about">
      <h2>O nás</h2>
      <div className="first-part">
        <p className="about-text" ref={firstPartRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          elementum, felis a ultricies ultricies, tellus augue efficitur ligula,
          eget ornare tellus odio vel velit. Mauris vel scelerisque ante. Ut
          vitae felis dapibus, hendrerit lectus id, auctor urna. Curabitur ex
          mauris, sagittis in turpis sit amet, ultricies imperdiet felis.
          Praesent tempus neque vitae erat varius, non molestie velit bibendum.
          In ac blandit lorem. Sed non imperdiet est. In vestibulum ligula sed
          purus convallis condimentum.
        </p>
        <img src={AboutImage} alt="Holding Dough Image" />
      </div>
      <div className="second-part">
        <img src={AboutImage2} alt="Falling Flour Image" />
        <div className="background-rectangle">
          <p className="about-text" ref={secondPartRef}>
            Mauris convallis lacus ut arcu pellentesque, eget pellentesque
            sapien feugiat. Aliquam erat volutpat. In tincidunt aliquet
            convallis. In hac habitasse platea dictumst. Nam posuere nunc quis
            neque hendrerit congue. Ut venenatis gravida metus, id aliquet diam
            luctus eget. Sed metus felis, blandit eu elementum in, condimentum
            vitae nulla. Morbi a eros pellentesque nibh aliquam cursus. Ut est
            ligula, finibus at nisi ut, aliquam rhoncus mi. Nam cursus, sapien
            id tristique lobortis, nulla nunc luctus odio, in ornare enim enim a
            arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
