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
                  ₹999
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Consultation</li>
                  <li>Stress Management</li>
                  <li>Anxiety and Trauma</li>
                  <li>Individual Coaching</li>
                  <li>Broken Relationship</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Relation
                  <br />
                  Goal
                </div>
                <div className="plan-price with_icon">
                  ₹3999
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Relationship Therapy</li>
                  <li>Couples Coaching</li>
                  <li>Intimacy Counseling</li>
                  <li>Partner Therapy</li>
                  <li>Bonding Support</li>
                </ul>
                
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6">
            <div className="price-table price-hover">
              <div className="price-media">
                <div className="plan-name">
                  Family
                  <br />
                  Therapy
                </div>
                <div className="plan-price with_icon">
                  ₹4999
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Conflict Resolution</li>
                  <li>Multi-Generational Healing</li>
                  <li>Navigating Transitions</li>
                  <li>Individual Coaching</li>
                  <li>Post-Divorce Recovery</li>
                </ul>
               
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
                  ₹5999
                  <p className="small-text">per hour</p>
                </div>
              </div>
              <div className="price-content ls with_shadow">
                <ul className="features-list">
                  <li>Emotional Support</li> 
                  <li>Improved Communication</li>
                  <li>Shared Perspectives</li>
                  <li>Skill Building</li>
                  <li>Social Connection</li>
                </ul>
                
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Prices;
