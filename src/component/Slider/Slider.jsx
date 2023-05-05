import React, { Component } from "react";
import Slider from "react-slick";
import { banner } from "../../data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {banner?.start?.map((item, index) => (
          <div key={index}>
            <img style={{ width: "100%" }} src={item} alt={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
