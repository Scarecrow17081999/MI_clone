import React from "react";
import "../../styles/Offers.scss";
export default function Offers({ data }) {
  return (
    <div className="offerSection">
      {data?.map((e, i) => (
        <Offer key={e.image} index={i} src={e.image} link={e.url} />
      ))}
    </div>
  );
}

const Offer = ({ index, src, link }) => (
  <div className="offer" key={index}>
    <a href={link} className="offerLink" target="_blank">
      <img src={src} alt="offer" />
    </a>
  </div>
);
