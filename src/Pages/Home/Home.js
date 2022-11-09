import React from "react";
import UseTitle from "../../CustomHooks/UseTitle/UseTitle";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Pricing from "./Pricing/Pricing";
import Slider from "./Sliders/Slider";
import Subscriptions from "./Subscriptions/Subscriptions";
import ThreeCard from "./ThreeCards/ThreeCard";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Slider />
      <ThreeCard />
      <PhotoGallery />
      <Pricing />
      <Subscriptions />
    </div>
  );
};

export default Home;
