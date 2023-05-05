import React from "react";
import "../../styles/Videos.scss";
const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((e, i) => {
        return <VideoCard key={i} image={e.image} name={e.name} index={i} />;
      })}
    </div>
  );
};
const playButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" />
  </svg>
);

const VideoCard = ({ image, name, index }) => {
  console.log(image);
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};
export default Videos;
