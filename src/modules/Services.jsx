import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      class="ls section_padding_top_130 section_padding_bottom_100"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="section_header with_icon">What We Can Offer</h2>
            <p>
             Explore a wide range of expert mental health services tailored to support your well-being and personal growth. Our approach is compassionate, evidence-based, and focused on empowering you to live a balanced, fulfilling life.
            </p>
          </div>
        </div>
        <div class="row columns_padding_0 columns_margin_0 fontsize_16">
          <div class="col-md-3 col-sm-6">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/relationship.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Depression</a>
              </h4>
              <p>
                We offer personalized therapy that helps uncover the root causes of depression and builds a strong foundation for emotional resilience and meaningful relationships.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/mental.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Bipolar Disorder</a>
              </h4>
              <p>
                Our care plans aim to enhance focus, stabilize mood swings, and reduce anxiety, helping you unlock creativity and lead a more structured life.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 clear-sm">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/feelings.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Anxiety</a>
              </h4>
              <p>
                Overcome daily struggles with anxiety through proven strategies that improve self-awareness, emotional control, and overall peace of mind.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/conflicting.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Panic Disorders</a>
              </h4>
              <p>
                We provide insights and therapeutic tools to help you understand, manage, and reduce panic attacks—restoring your confidence and sense of control.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 clear-lg clear-md clear-sm">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/meditation.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">ASD (Autism) </a>
              </h4>
              <p>
                Specialized support for individuals on the autism spectrum that promotes communication, emotional regulation, and social skills development.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/depression.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">OCD</a>
              </h4>
              <p>
                We help individuals manage intrusive thoughts and compulsive behaviors through structured, cognitive-behavioral interventions tailored to their unique needs.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 clear-sm">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/mind.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Substance Use Disorders </a>
              </h4>
              <p>
               Our compassionate addiction recovery services focus on healing the root causes of substance use, building healthy coping mechanisms, and promoting long-term sobriety.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="with_padding text-center teaser hover_shadow">
              <div className="mb-6 flex justify-center">
                <img src="./images/service-icons/relaxation.png" alt="" />
              </div>
              <h4>
                <a href="service-single.html">Relation and Family Conflicts</a>
              </h4>
              <p>
               Strengthen your relationships with therapy that fosters healthy communication, conflict resolution, and emotional connection between partners and family members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
