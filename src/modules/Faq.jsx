import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section
      id="faq"
      className="ls section_padding_top_130 section_padding_bottom_100"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section_header with_icon">
              Frequently Asked Questions
            </h2>
            <p>
              We understand that reaching out for mental health support is a big step. Below are some common questions we receive, along with clear answers to help guide you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel-group" id="accordion1">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapse1"
                      className="collapsed"
                    >
                     What is mental illness?
                    </a>
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                  <div className="panel-body">
                   A.	It refers to a wide range of mental health disorders that affect a person’s thoughts, feelings, and behaviors.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapse2"
                      className="collapsed"
                    >
                    What causes mental illness?
                    </a>
                  </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                  <div className="panel-body">
                   It can be caused by a combination of genetic, environmental, and psychological factors.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapse3"
                      className="collapsed"
                    >
                      What are the symptoms of mental illness?
                    </a>
                  </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                  <div className="panel-body">
                   A.	It is depended on the type of disorder, but may include changes in mood, energy, or behavior.
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapse4"
                      className="collapsed"
                    >
                     What is depression?
                    </a>
                  </h4>
                </div>
                <div id="collapse4" className="panel-collapse collapse">
                  <div className="panel-body">
                    A.	Feelings of sadness, hopelessness, and a lack of interest in day-to-day activities..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tab-content padding_0">
              <div className="tab-pane fade in active" id="tab1">
                <div className="embed-responsive embed-responsive-16by9">
                  
                    <img src="./images/video_tab1.jpg" alt="" />
                  
                </div>
              </div>

              <div className="tab-pane fade" id="tab2">
                <div className="embed-responsive embed-responsive-16by9">
                
                    <img src="./images/video_tab2.jpg" alt="" />
                 
                </div>
              </div>

              <div className="tab-pane fade" id="tab3">
                <div className="embed-responsive embed-responsive-16by9">
                  
                    <img src="./images/video_tab3.jpg" alt="" />
                  
                </div>
              </div>
            </div>

            <ul className="nav nav-image" role="tablist">
              <li className="active">
                <a href="#tab1" role="tab" data-toggle="tab">
                  <img src="./images/video_tab1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#tab2" role="tab" data-toggle="tab">
                  <img src="./images/video_tab2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#tab3" role="tab" data-toggle="tab">
                  <img src="./images/video_tab3.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
