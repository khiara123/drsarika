import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section_header with_icon">Recent Articles</h2>
            <p>
              Stay informed, inspired, and empowered with our latest insights in mental health and emotional well-being. Each article is thoughtfully written by professionals to help you better understand yourself and support those around you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src="images/blog_post1.jpg" alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <Link to={"#"} rel="bookmark">
                      <time
                        className="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        Jun, 2025
                      </time>
                    </Link>
                  </div>

                  <h4 className="entry-title">
                    <Link to={"#"} rel="bookmark">
                    Depression is not a joke
                    </Link>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  Depression is a common mental health disorder that affects millions of people worldwide.It’s characterized by persistent feelings of sadness
                </p>

                <Link to={"/blogs/DEPRESSION_IS_NOT_A_JOKE"} className="theme_button color1">
                  Read article
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src="./images/blog_post2.jpg" alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <Link to={"#"} rel="bookmark">
                      <time
                        className="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        April 27, 2025
                      </time>
                    </Link>
                  </div>

                  <h4 className="entry-title">
                    <Link to={"#"} rel="bookmark">
                      Know The Austim Spctrum Disorder
                    </Link>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  Autism Spectrum Disorder (ASD) is a neurological disorder that affects communication, social interaction, and behavior.
                </p>

                <Link to={"/blogs/KNOW_THE_AUTISM_SPECTRUM_DISORDER"} className="theme_button color1">
                  Read article
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src="./images/blog_post3.jpg" alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <Link to={"#"} rel="bookmark">
                      <time
                        className="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        March 13, 2025
                      </time>
                    </Link>
                  </div>

                  <h4 className="entry-title">
                    <Link to={"#"} rel="bookmark">
                      Understanding Teenager’S Behaviour
                    </Link>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  The teenage years can be a tumultuous time, marked by significant physical, emotional, and social changes.
                </p>

                <Link to={"/blogs/UNDERSTANDING_TEENAGER’S_BEHAVIOURAL_ISSUES"} className="theme_button color1">
                  Read article
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
