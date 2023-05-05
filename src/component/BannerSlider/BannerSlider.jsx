import React from "react";
import "../../styles/BannerSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "../../data/data.json";
import Slider from "react-slick";
const BannerSlider = () => {
  return <SimpleSlider />;
};

const styles = {
  textAlign: "center",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 999,
  color: "white",
};
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
        {banner?.end?.map((item, index) => (
          <div style={{ position: "relative" }} key={index}>
            <img style={{ width: "100%" }} src={item.image} alt={item.image} />
            <div style={styles} className="videosDescription">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
              <u>Read more</u>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
