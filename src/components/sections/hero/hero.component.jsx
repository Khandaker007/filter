import React from "react";

// IMAGES
import heroImage from "../../../assets/images/hero/hero-img.png";
import cover from "../../../assets/images/hero/cover.png";

// STYLE
import "./hero.style.scss";

function Hero(props) {
  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="hero__content">
        <h1>
          <span>Waste is</span>
          <span>Resource</span>
        </h1>
        <h2>Recycle, Reuse, Resource, Sustainable, life</h2>
      </div>
      <div className="hero__image">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
