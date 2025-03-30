import React from "react";
import { Link } from "react-router-dom";

const Prices = () => {
  return (
    <section
      id="prices"
      className="cs darken_gradient section_padding_75 columns_padding_0 columns_margin_0"
    >
      <div className="container">
        <div className="row flex-row price-row">
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Personal
                  <br />
                  Help
                </div>
                <div className="plan-price with_icon">
                  $99
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Depression Therapy</li>
                  <li>Stress Management</li>
                  <li>Anxiety Treatment</li>
                  <li>Individual Coaching</li>
                  <li>Post-Divorce Recovery</li>
                </ul>
                <div className="call-to-action">
                  <Link to={"#"} className="theme_button color1">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Couples
                  <br />
                  Therapy
                </div>
                <div className="plan-price with_icon">
                  $149
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Depression Therapy</li>
                  <li>Stress Management</li>
                  <li>Anxiety Treatment</li>
                  <li>Post-Divorce Recovery</li>
                </ul>
                <div className="call-to-action">
                  <Link to={"#"} className="theme_button color1">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Group
                  <br />
                  Therapy
                </div>
                <div className="plan-price with_icon">
                  $49
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Depression Therapy</li>
                  <li>Stress Management</li>
                  <li>Anxiety Treatment</li>
                </ul>
                <div className="call-to-action">
                  <Link to={"#"} className="theme_button color1">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Personal
                  <br />
                  Help
                </div>
                <div className="plan-price with_icon">
                  $99
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Depression Therapy</li>
                  <li>Stress Management</li>
                  <li>Anxiety Treatment</li>
                  <li>Individual Coaching</li>
                  <li>Post-Divorce Recovery</li>
                </ul>
                <div className="call-to-action">
                  <Link to={"#"} className="theme_button color1">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
