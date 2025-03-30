import React from "react";
import Login from "../Login";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const TopHeader = () => {
  return (
    <section className="page_topline cs table_section table_section_md columns_padding_0">
      <div className="container-fluid">
        <div className="row">
          <Login />

          <div className="col-md-6 text-center divided_content">
            <div>
              <div className="media small-teaser">
                <div className="media-body">0 (800) 337 25 25</div>
              </div>
            </div>

            <div>
              <div className="media small-teaser">
                <div className="media-left pt-1.5">
                  <FaAddressCard />
                </div>
                <div className="media-body">
                  350 Leverton Cove Road Springfield, MA
                </div>
              </div>
            </div>

            <div>
              <div className="media small-teaser">
                <div className="media-left pt-1.5">
                  <TfiEmail />
                </div>
                <div className="media-body">
                  <Link
                    to={"#"}
                    className="__cf_email__"
                    data-cfemail="c1b2b4b1b1aeb3b581b1b2b8a2a9aeadaea6a8b2b5efa2aeac"
                  >
                    [email&#160;protected]
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center text-md-right bottommargin_0">
            <Link
              onClick={() => {
                const appointmentSection =
                  document.getElementById("appointment");
                if (appointmentSection) {
                  appointmentSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="theme_button color1 margin_0"
            >
              Make an appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
