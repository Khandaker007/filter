import React from "react";

// IMAGES
import plants from "../../../assets/images/we-provide/plants.png";
import cash from "../../../assets/images/we-provide/cash.png";
import mobileRecharge from "../../../assets/images/we-provide/mobile-recharge.png";
import rooftop from "../../../assets/images/we-provide/rooftop-gardening.png";
import filter from "../../../assets/images/we-provide/filter-products.png";
import discount from "../../../assets/images/we-provide/discount-coupons.png";

// CONPONENTS
import PointHeading from "../../shared/pointHeading/pointHeading.component";
import CommonCard from "../../shared/commonCard/commonCard.component";

// STYLE
import "./weProvide.style.scss";

function WeProvide(props) {
  return (
    <div className="we-provide">
      <PointHeading text="We Provide" />
      <div className="grid-container">
        <CommonCard img={plants} tag="Plants" />
        <CommonCard img={cash} tag="Cash" />
        <CommonCard img={mobileRecharge} tag="Mobile Recharge" />
        <CommonCard img={rooftop} tag="Rooftop Gardening" />
        <CommonCard img={filter} tag="FILTER Products" />
        <CommonCard
          img={discount}
          tag="Discount Coupons"
          subTag="Outlets/Shops/Restaurents"
        />
      </div>
    </div>
  );
}

export default WeProvide;
