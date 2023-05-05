import React from "react";
import "../../styles/Heading.scss";
const Heading = ({ data }) => {
  return (
    <div className="heading">
      <div></div>
      <p>{data}</p>
      <div></div>
    </div>
  );
};

export default Heading;
