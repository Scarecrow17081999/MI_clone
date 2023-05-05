import React from "react";
import "../../styles/HotAccessories.scss";
const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div id="hotAccessories">
      <div>
        <div>
          <img
            src={
              musicCover ||
              smartDeviceCover ||
              homeCover ||
              lifestyleCover ||
              mobileAccessoriesCover
            }
            alt="cover"
          />
        </div>

        <div>
          {music &&
            music?.map((e, i) => (
              <HotItemCard
                key={i}
                name={e.name}
                price={e.price}
                image={e.image}
                index={i}
              />
            ))}
          {smartDevice &&
            smartDevice?.map((e, i) => (
              <HotItemCard
                key={i}
                name={e.name}
                price={e.price}
                image={e.image}
                index={i}
              />
            ))}
          {home &&
            home?.map((e, i) => (
              <HotItemCard
                key={i}
                name={e.name}
                price={e.price}
                image={e.image}
                index={i}
              />
            ))}
          {lifestyle &&
            lifestyle?.map((e, i) => (
              <HotItemCard
                key={i}
                name={e.name}
                price={e.price}
                image={e.image}
                index={i}
              />
            ))}
          {mobileAccessories &&
            mobileAccessories?.map((e, i) => (
              <HotItemCard
                key={i}
                name={e.name}
                price={e.price}
                image={e.image}
                index={i}
              />
            ))}

          <HotItemCard />
        </div>
      </div>
    </div>
  );
};

const HotItemCard = ({ name, price, image, index }) => {
  return (
    <div className="hotItemCard" key={index}>
      <img src={image} alt="cover" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotAccessories;
