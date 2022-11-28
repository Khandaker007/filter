import React from "react";

// ICONS
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// STYLE
import "./sliderButton.style.scss";

function SliderButton({ type, onClick }) {
  return (
    <button className="btn" type="button" onClick={onClick}>
      {type === "next" ? (
        <FaAngleRight className="icon" />
      ) : (
        <FaAngleLeft className="icon" />
      )}
    </button>
  );
}

export default SliderButton;
