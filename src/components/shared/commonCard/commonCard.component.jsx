import React from "react";

// STYLE
import "./commonCard.style.scss";

function CommonCard({ img, tag, subTag }) {
  return (
    <div
      className="common-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mask"></div>
      <img src={img} alt="bg-img" />
      <div className="type">
        <span>{tag}</span>
        <span>{subTag}</span>
      </div>
    </div>
  );
}

export default CommonCard;
