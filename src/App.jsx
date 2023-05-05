import { Route, Routes } from "react-router-dom";
import "./App.css";
import Heading from "./component/Heading/Heading";
import HotAccessoriesMenu from "./component/HotAccessoriesMenu/HotAccessoriesMenu";
import Navbar from "./component/Navbar/Navbar";
import Offers from "./component/Offers/Offers";
import PreNavBar from "./component/PreNavBar/PreNavBar";
import SimpleSlider from "./component/Slider/Slider";
import StartProducts from "./component/StartProducts/StartProducts";
import data from "./data/data.json";
import HotAccessories from "./component/HotAccessories/HotAccessories";
import ProductReviews from "./component/ProductReviews/ProductReviews";
import Videos from "./component/Videos/Videos";
import BannerSlider from "./component/BannerSlider/BannerSlider";
import Footer from "./component/Footer/Footer";
import NavOptions from "./component/NavOptions/NavOptions";

function App() {
  return (
    <>
      <PreNavBar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifestyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        assessories={data.accessories}
      />
      <SimpleSlider />
      <Offers data={data?.offer} />
      <Heading data="STAR PRODUCTS" />
      <StartProducts data={data?.starProduct} />
      <Heading data="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>
      <Heading data="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading data="VIDEOS" />
      <Videos videos={data.videos} />
      <BannerSlider />
      <Footer data={data?.footer} />
    </>
  );
}

export default App;
