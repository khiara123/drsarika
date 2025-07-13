import React from "react";
import Slider from "./modules/Slider";
import Services from "./modules/Services";
import Appointment from "./modules/Appointment";
import Prices from "./modules/Prices";
import Faq from "./modules/Faq";
import Articles from "./modules/Articles";
import Quotes from "./modules/Quotes";
import About from "./modules/About";

const Home = () => {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <Slider />
        <Services />
        <About />
        <Articles />
        <Quotes />
        <Faq />
        <Prices />
        <Appointment />
      </div>
    </div>
  );
};

export default Home;