import React from "react";
import TopHeader from "./modules/Header/TopHeader";
import Header from "./modules/Header/Header";
import Slider from "./modules/Slider";
import Services from "./modules/Services";
import Footer from "./modules/Footer";
import BottomFooter from "./modules/BottomFooter";
import Appointment from "./modules/Appointment";
import Prices from "./modules/Prices";
import Faq from "./modules/Faq";
import Articles from "./modules/Articles";
import Quotes from "./modules/Quotes";
import About from "./modules/About";

const App = () => {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <TopHeader />
        <Header />
        <Slider />
        <Services />
        <About />
        <Articles />
        <Quotes />
        <Faq />
        <Prices />
        <Appointment />
        <Footer />
        <BottomFooter />
      </div>
    </div>
  );
};

export default App;
