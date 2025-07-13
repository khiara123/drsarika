import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="page_header header_white table_section columns_padding_0 toggler-xs-right">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <Link to="#" className="logo"> Psychologist </Link>
            <span
              className="toggle_menu visible-xs"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <span></span>
            </span>
          </div>

          <div className="col-md-6 col-sm-2 text-center">
            <nav className={`mainmenu_wrapper ${menuVisible ? "menu-open" : ""}`}>
              <ul className="mainmenu nav sf-menu">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallary">Gallery</Link></li>
              </ul>
            </nav>
            <span className="toggle_menu hidden-xs">
              <span></span>
            </span>
          </div>

          <div className="social-icons-container">
  <div className="social-icons">
    <a href="#"><FaFacebook /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaGoogle /></a>
    <a href="#"><FaLinkedin /></a>
  </div>
</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
