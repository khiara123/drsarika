import React from "react";

const Quotes = () => {
  return (
    <section className="cs main_color2 parallax page_testimonials section_padding_75">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              className="owl-carousel testimonials-carousel top-dots"
              data-responsive-sm="1"
              data-responsive-md="1"
              data-responsive-lg="1"
              data-dots="true"
            >
              <blockquote>
                “Dr Sarika is not only a great psychologist but a nice human being too, she is really very dedicated to her clients, very humble and supportive .I strongly recommend her”
                <div className="item-meta">
                  <h5>Sukeshni Agrawal</h5>
                </div>
              </blockquote>
              <blockquote>
                “I have seen many doctors in my life but Dr Sarika your knowledge and skills never cease to amaze the people around you. We all are so thankful to have you as a doctor in our lives.”
                <div className="item-meta">
                  <h5>Pramod Kumar</h5>
                </div>
              </blockquote>
              <blockquote>
                “Dr. Sarika is extremely talented clinical psychologist. The doctor and the entire team of CIMS is doing a great job in our district.”
                <div className="item-meta">
                  <h5>Jhumi Kulshreshtha</h5>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
