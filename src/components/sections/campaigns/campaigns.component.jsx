import React from "react";

// COMPONENTS
import Sliders from "../../shared/slider/slider.component";
import PointHeading from "../../shared/pointHeading/pointHeading.component";

// STYLE
import "./campaigns.style.scss";

function Campaigns(props) {
  return (
    <div className="campaigns">
      <div className="heading">
        <PointHeading text="Campaigns" />
      </div>
      <Sliders />
    </div>
  );
}

export default Campaigns;
