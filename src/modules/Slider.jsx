import React from "react";

const Slider = () => {
  return (
    <section class="intro_section page_mainslider ds">
      <div class="flexslider">
        <ul class="slides">
          <li>
            <img src="./images/slide01.jpg" alt="" />
            <div class="container">
              <div class="row">
                <div class="col-sm-12 text-center">
                  <div class="slide_description_wrapper">
                    <div class="slide_description">
                      <div class="intro-layer" data-animation="fadeInRight">
                        <h3>Rita Solomou</h3>
                      </div>
                      <div class="intro-layer" data-animation="fadeInLeft">
                        <p class="small-text grey">Premium HTML Template</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <img src="./images/slide01.jpg" alt="" />
            <div class="container">
              <div class="row">
                <div class="col-sm-12 text-center">
                  <div class="slide_description_wrapper">
                    <div class="slide_description">
                      <div class="intro-layer" data-animation="fadeInRight">
                        <h3>Rita Solomou</h3>
                      </div>
                      <div class="intro-layer" data-animation="fadeInLeft">
                        <p class="small-text grey">Premium HTML Template</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
