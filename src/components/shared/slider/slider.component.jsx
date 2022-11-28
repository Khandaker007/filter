import React from "react";

// CONPONENTS
import SliderCard from "../sliderCard/sliderCard.component";
import SliderButton from "../sliderButton/sliderButton.component";

// SLICK
import Slider from "react-slick";

// STYLE
import "./slider.style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders(props) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    appendArrows: ".slider-arrow",
    nextArrow: <SliderButton type="next" />,
    prevArrow: <SliderButton type="prev" />,
  };

  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Slider>
    </div>
  );
}

export default Sliders;
