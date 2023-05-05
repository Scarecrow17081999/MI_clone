import React from "react";
import "../../styles/NavOptions.scss";
const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifestyle,
  home,
  audio,
  assessories,
}) => {
  const [miPhonesToggle, setMiPhonesToggle] = React.useState(false);
  const [redmiPhonesToggle, setRedmiPhonesToggle] = React.useState(false);
  const [tvToggle, setTvToggle] = React.useState(false);
  const [laptopToggle, setLaptopToggle] = React.useState(false);
  const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] =
    React.useState(false);
  const [homeToggle, setHomeToggle] = React.useState(false);
  const [audioToggle, setAudioToggle] = React.useState(false);
  const [assessoriesToggle, setAssessoriesToggle] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setMiPhonesToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setRedmiPhonesToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setFitnessAndLifestyleToggle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAssessoriesToggle(true);
    }
  }, [miPhonesToggle, redmiPhonesToggle]);

  return (
    <div className="navOptions">
      {miPhonesToggle
        ? miPhones.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {tvToggle
        ? tv.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {laptopToggle
        ? laptop.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {fitnessAndLifestyleToggle
        ? fitnessAndLifestyle.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {homeToggle
        ? home.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {audioToggle
        ? audio.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
      {assessoriesToggle
        ? assessories.map((e) => (
            <NavCard name={e.name} price={e.price} image={e.image} />
          ))
        : null}
    </div>
  );
};

export default NavOptions;

const NavCard = ({ name, price, image }) => {
  return (
    <div className="navCard">
      <img src={image} alt={image} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};
