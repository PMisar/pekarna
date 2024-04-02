import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>O nás</h2>
      <div className="first-row">
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          elementum, felis a ultricies ultricies, tellus augue efficitur ligula,
          eget ornare tellus odio vel velit. Mauris vel scelerisque ante. Ut
          vitae felis dapibus, hendrerit lectus id, auctor urna. Curabitur ex
          mauris, sagittis in turpis sit amet, ultricies imperdiet felis.
          Praesent tempus neque vitae erat varius, non molestie velit bibendum.
          In ac blandit lorem. Sed non imperdiet est. In vestibulum ligula sed
          purus convallis condimentum.
        </p>
        <img src="/src/assets/about-image.jpg" alt="First Image" />
      </div>
      <div className="second-row">
        <img src="/src/assets/about-image2.jpg" alt="Second Image" />
        <div className="background-rectangle">
          <p className="about-text">
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
