import React from "react";

// STYLE
import "./pointHeading.style.scss";

function PointHeading({ text }) {
  return (
    <h3 className="point-heading">
      <span className="arrow"></span>
      {text}
    </h3>
  );
}

export default PointHeading;
