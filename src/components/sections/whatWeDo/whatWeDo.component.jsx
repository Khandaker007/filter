import React from "react";

// COMPONENTS
import PointHeading from "../../shared/pointHeading/pointHeading.component";

// LAYOUT
import layout from "../../../assets/layout/leaf-layout.svg";

// IMAGES
import imgBig from "../../../assets/images/what-we-do/big-img.png";
import imgSmall from "../../../assets/images/what-we-do/small-img.png";

// STYLE
import "./whatWeDo.style.scss";

function WhatWeDo(props) {
  return (
    <div className="what-we-do">
      <div className="layout">
        <img src={layout} alt="layout" />
      </div>
      <div className="what-we-do__images" data-aos="fade-right">
        <div className="img-container">
          <img className="img-big" src={imgBig} alt="big-img" />
          <div className="img-container">
            <img className="img-small" src={imgSmall} alt="small-img" />
          </div>
        </div>
      </div>
      <div className="what-we-do__content" data-aos="fade-left">
        <PointHeading text="What We Do" />
        <p>
          FILTER is a technology-based door to door waste management company
          whose tagline is ‘Waste is resource’. Basically, FILTER is a service
          provider company. FILTER collect and recycle six categories of waste
          (paper, plastic, metal, polythene, glass, e-waste) from residential
          building, commercial building, shopping mall, restaurants, other
          institutions and provide plants, rooftop gardening facilities, cash,
          mobile recharge and mobile banking facilities in exchange of waste.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
