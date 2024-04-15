import React from "react";
import HistoryImage from "../assets/history.jpg";

const History = () => {
  return (
    <>
      <div className="history-container" id="history">
        <h2>Historie</h2>
        <div className="history-content">
          <div className="left-column">
            <p className="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum, felis a ultricies ultricies, tellus augue efficitur
              ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
              ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
              Curabitur ex mauris, sagittis in turpis sit amet, ultricies
              imperdiet felis. Praesent tempus neque vitae erat varius, non
              molestie velit bibendum. In ac blandit lorem. Sed non imperdiet
              est. In vestibulum ligula sed purus convallis condimentum.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum, felis a ultricies ultricies, tellus augue efficitur
              ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
              ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
              Curabitur ex mauris, sagittis in turpis sit amet, ultricies
              imperdiet felis. Praesent tempus neque vitae erat varius, non
              molestie velit bibendum.
            </p>
          </div>
          <div className="right-column">
            <div className="history-image">
              <img src={HistoryImage} alt="History Image" />
            </div>
            <p className="fade-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum, felis a ultricies ultricies, tellus augue efficitur
              ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
              ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
              Curabitur ex mauris, sagittis in turpis sit amet, ultricies
              imperdiet felis. Praesent tempus neque vitae erat varius, non
              molestie velit bibendum. In ac blandit lorem. Sed non imperdiet
              est. In vestibulum ligula sed purus convallis condimentum.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum, felis a ultricies ultricies, tellus augue efficitur
              ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
              ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
              Curabitur ex mauris, sagittis in turpis sit amet, ultricies
              imperdiet felis. Praesent tempus neque vitae erat varius, non
              molestie velit bibendum. In ac blandit lorem. Sed non imperdiet
              est. In vestibulum ligula sed purus convallis condimentum.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum, felis a ultricies ultricies, tellus augue efficitur
              ligula, eget ornare tellus odio vel velit. Mauris vel scelerisque
              ante. Ut vitae felis dapibus, hendrerit lectus id, auctor urna.
              Curabitur ex mauris, sagittis in turpis sit amet, ultricies
              imperdiet felis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
