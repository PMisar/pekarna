import React, { useRef, useEffect } from "react";
import HistoryImage from "../assets/history.jpg";

const History = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const handleScroll = () => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (leftColumn && rightColumn) {
      const leftColumnTop = leftColumn.getBoundingClientRect().top;
      const rightColumnTop = rightColumn.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (leftColumnTop < windowHeight) {
        leftColumn.classList.add("fade-left");
      }
      if (rightColumnTop < windowHeight) {
        rightColumn.classList.add("fade-right");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="history-container" id="history">
      <h2>Historie</h2>
      <div className="history-content">
        <div className="left-column" ref={leftColumnRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            elementum, felis a ultricies ultricies, tellus augue efficitur
            ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
            ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
            Curabitur ex mauris, sagittis in turpis sit amet, ultricies
            imperdiet felis. Praesent tempus neque vitae erat varius, non
            molestie velit bibendum. In ac blandit lorem. Sed non imperdiet est.
            In vestibulum ligula sed purus convallis condimentum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin elementum, felis
            a ultricies ultricies, tellus augue efficitur ligula, eget ornare
            tellus odio vel velit. Mauris vel scelerisque ante. Ut vitae felis
            dapibus, hendrerit lectus id, auctor urna. Curabitur ex mauris,
            sagittis in turpis sit amet, ultricies imperdiet felis. Praesent
            tempus neque vitae erat varius, non molestie velit bibendum.
          </p>
        </div>
        <div className="right-column">
          <div className="history-image">
            <img src={HistoryImage} alt="History Image" />
          </div>
          <p ref={rightColumnRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            elementum, felis a ultricies ultricies, tellus augue efficitur
            ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
            ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
            Curabitur ex mauris, sagittis in turpis sit amet, ultricies
            imperdiet felis. Praesent tempus neque vitae erat varius, non
            molestie velit bibendum. In ac blandit lorem. Sed non imperdiet est.
            In vestibulum ligula sed purus convallis condimentum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin elementum, felis
            a ultricies ultricies, tellus augue efficitur ligula, eget ornare
            tellus odio vel velit. Mauris vel scelerisque ante. Ut vitae felis
            dapibus, hendrerit lectus id, auctor urna. Curabitur ex mauris,
            sagittis in turpis sit amet, ultricies imperdiet felis. Praesent
            tempus neque vitae erat varius, non molestie velit bibendum. In ac
            blandit lorem. Sed non imperdiet est. In vestibulum ligula sed purus
            convallis condimentum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin elementum, felis a ultricies ultricies,
            tellus augue efficitur ligula, eget ornare tellus odio vel velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
