import React from "react";
import "../../styles/Navbar.scss";
import { logo } from "../../data/data.json";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="28"
    viewBox="0 96 960 960"
    width="28"
  >
    <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
  </svg>
);

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img id="logoImage" src={logo} alt="" />
        </a>
      </div>
      <a className="navlinks" href="/miphones">
        Mi Phones
      </a>
      <a className="navlinks" href="/redmiphones">
        Redmi Phones
      </a>
      <a className="navlinks" href="/tv">
        TV
      </a>
      <a className="navlinks" href="/laptops">
        Laptops
      </a>
      <a className="navlinks" href="/lifestyle">
        Lifestyle
      </a>
      <a className="navlinks" href="/home">
        Home
      </a>
      <a className="navlinks" href="/audio">
        Audio
      </a>
      <a className="navlinks" href="/accessories">
        Accessories
      </a>

      <div className="searchBox">
        <input type="text" name="" id="" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
