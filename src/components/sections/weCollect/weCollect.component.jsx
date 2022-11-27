import React from "react";

// IMAGES
import plastic from "../../../assets/images/we-collect/plastic.png";
import paper from "../../../assets/images/we-collect/paper.png";
import polythene from "../../../assets/images/we-collect/polythene.png";
import metal from "../../../assets/images/we-collect/metal.png";
import glass from "../../../assets/images/we-collect/glass.png";
import eWaste from "../../../assets/images/we-collect/e-waste.png";

// CONPONENTS
import PointHeading from "../../shared/pointHeading/pointHeading.component";
import CommonCard from "../../shared/commonCard/commonCard.component";

// STYLE
import "./weCollect.style.scss";

function WeCollect(props) {
  return (
    <div className="we-collect">
      <PointHeading text="We Collect" />
      <div className="grid-container">
        <CommonCard img={plastic} tag="Plastic" />
        <CommonCard img={paper} tag="Paper" />
        <CommonCard img={polythene} tag="Polythene" />
        <CommonCard img={metal} tag="Metal" />
        <CommonCard img={glass} tag="Glass" />
        <CommonCard img={eWaste} tag="E-Waste" />
      </div>
    </div>
  );
}

export default WeCollect;
