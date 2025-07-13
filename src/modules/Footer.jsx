import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page_footer cs main_color2 table_section section_padding_50 columns_padding_0">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-push-4 text-center">
            <Link to={"#"} className="logo big text-shadow">
              Psychologist
              <span className="small-text">Dr Sarika Gautam</span>
            </Link>
          </div>

          <div className="col-sm-4 col-sm-pull-4 text-center text-sm-left text-md-left">
            <div className="widget widget_nav_menu greylinks">
              <ul className="menu divided_content wide_divider">
                <li className="">
                  <Link to={"/"}>Home</Link>
                </li>
                
                <li className="">
                  <Link to={"/services"}>Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4 text-center text-sm-right text-md-right">
            <div className="widget widget_nav_menu greylinks">
              <ul className="menu divided_content wide_divider">
                <li className="">
                  <Link to={"/gallary"}>Gallery</Link>
                </li>
                <li className="">
                  <Link to={"/blogs"}>Blog</Link>
                </li>
                <li className="">
                  <Link to={"#"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
