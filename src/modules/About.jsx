import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="cs parallax darken_gradient page_about section_padding_top_75 columns_margin_bottom_30"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6 text-center">
            <h2 className="section_header">
              Welcome to Psychologist &amp; Family Consulting
            </h2>
            <br />
            <p className="bold fontsize_18">
              It's my goal to create a comfortable, safe environment, where
              we'll work to achieve the goal together.
            </p>
            <p className="fontsize_18">
            Passionate and reliable Psychologist develops
customized treatment plans to meet unique client needs.
Provides evidence-based care with careful examination
of relevant characteristics. 
            </p>
            <div className="with_icon topmargin_60">
              <h5 className="small-text text-uppercase inline-block">
               Dr Sarika Gautam
              </h5>
              <span className="lightgrey">Psychologist</span>
            </div>
            <img src="./images/signature.png" alt="" />
          </div>
          <div className="col-md-6 col-md-pull-6 text-center bottommargin_0">
            <img src="./images/person.png" alt="" className="top-overlap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
