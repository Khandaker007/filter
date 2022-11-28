import React from "react";

// IMAGES
import img1 from "../../../assets/images/campaigns/awareness-campign.png";

// STYLE
import "./sliderCard.style.scss";

function SliderCard(props) {
  return (
    <div className="slider-card">
      <div className="img-container">
        <img src={img1} alt="card-img" />
      </div>
      <h4 className="title">World Environment Day, 2022</h4>
      <span className="location">Dhaka</span>
    </div>
  );
}

export default SliderCard;
