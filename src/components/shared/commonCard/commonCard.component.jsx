import React from "react";

// STYLE
import "./commonCard.style.scss";

function CommonCard({ img, tag, subTag }) {
  return (
    <div className="common-card">
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
