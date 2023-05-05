import React from "react";
import "../../styles/StartProducts.scss";
const StartProducts = ({ data }) => {
  return (
    <div id="sStartProducts">
      <div>
        <a href={data[0].url}>
          <img src={data[0].image} alt="image1" />
        </a>
      </div>
      <div>
        <a href={data[1].url}>
          {" "}
          <img src={data[1].image} alt="image2" />
        </a>
        <a href={data[2].url}>
          {" "}
          <img src={data[2].image} alt="image3" />
        </a>
        <a href={data[3].url}>
          {" "}
          <img src={data[3].image} alt="image4" />
        </a>
      </div>
    </div>
  );
};

export default StartProducts;
