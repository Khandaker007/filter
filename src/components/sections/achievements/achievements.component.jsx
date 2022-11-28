import React from "react";

// COMPONENTS
import PointHeading from "../../shared/pointHeading/pointHeading.component";

// IMAGES
import img1 from "../../../assets/images/achievements/mujib-100.png";
import img2 from "../../../assets/images/achievements/yy-ghosthi.png";
import img3 from "../../../assets/images/achievements/green-inclusive.png";

// STYLE
import "./achievements.style.scss";

function Achievements(props) {
  return (
    <div className="achievements">
      <PointHeading text="Achievements" />
      <div className="grid-box">
        <div className="achievement-card card-1">
          <div className="img-container">
            <img src={img1} alt="" />
          </div>
          <div className="details">
            <h4 className="title">
              <span>Waste Management for</span>
              <span>Sustainable Life.</span>
            </h4>
            <span className="desc">
              Selected as top 100 ideas in Mujib top 100 Idea Contest.
            </span>
          </div>
        </div>
        <div className="achievement-card card-2">
          <div className="img-container">
            <img src={img2} alt="" />
          </div>
          <div className="details">
            <h4 className="title">YY Ghosthi incubation program.</h4>
            <span className="desc">
              FILTER has been selected for the spring 2022 cohort of the YY
              ghosthi incubation program created by YY Ventures and powered by
              the Netherlands Enterprise Agency.
            </span>
          </div>
        </div>
        <div className="achievement-card card-3">
          <div className="img-container">
            <img src={img3} alt="" />
          </div>
          <div className="details">
            <h4 className="title">
              <span>Champion</span>
              <span>Green Inclusive Business</span>
              <span>Champion 2021.</span>
            </h4>
            <span className="desc">Organized by Green tech Foundation.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
