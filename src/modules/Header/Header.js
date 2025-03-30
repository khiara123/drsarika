import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="page_header header_white table_section columns_padding_0 toggler-xs-right">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <Link to={"#"} className="logo">
              {" "}
              Psychologist{" "}
            </Link>
            <span className="toggle_menu visible-xs">
              <span></span>
            </span>
          </div>
          <div className="col-md-6 col-sm-2 text-center">
            <nav className="mainmenu_wrapper">
              <ul className="mainmenu nav sf-menu">
                <li className="active">
                  <Link to={"#"}>Home</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>MultiPage</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Single Page</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Admin Dashboard</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to={"#"}>Blog</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>Right Sidebar</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Left Sidebar</Link>
                    </li>
                    <li>
                      <Link to={"#"}>No Sidebar</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Blog Grid</Link>
                    </li>

                    <li>
                      <Link to={"#"}>Post</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Right Sidebar</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Left Sidebar</Link>
                        </li>
                        <li>
                          <Link to={"#"}>No Sidebar</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to={"#"}>Video Post</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Right Sidebar</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Left Sidebar</Link>
                        </li>
                        <li>
                          <Link to={"#"}>No Sidebar</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to={"#"}>Pages</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>Shortcodes &amp; Widgets</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Typography</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Buttons</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Pricing</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Teasers</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Progress</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Tabs &amp; Collapse</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Bootstrap Elements</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Widgets</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Animation</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Template Icons</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Social Icons</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to={"#"}>About</Link>
                    </li>

                    <li>
                      <Link to={"#"}>Our Services</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Services</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Single service</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Single service 2</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to={"#"}>Timetable</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Shop</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Shop</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Single Product</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Shopping Cart</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Checkout</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Registration</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"#"}>Gallery</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Gallery Regular</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>1 column</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={"#"}>Gallery Full Width</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>2 column</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Extended</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>1 column</Link>
                            </li>
                            <li>
                              <Link to={"#"}>2 columns</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Carousel</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>1 column</Link>
                            </li>
                            <li>
                              <Link to={"#"}>2 columns</Link>
                            </li>
                            <li>
                              <Link to={"#"}>3 columns</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Tile</Link>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Left Sidebar</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>1 column</Link>
                            </li>
                            <li>
                              <Link to={"#"}>2 columns</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Right Sidebar</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>1 column</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to={"#"}>Gallery Item</Link>
                          <ul>
                            <li>
                              <Link to={"#"}>Style 1</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to={"#"}>Contact</Link>
                      <ul>
                        <li>
                          <Link to={"#"}>Contact 1</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="active">
                  <Link to={"#"}>Services</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>MultiPage</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Single Page</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Admin Dashboard</Link>
                    </li>
                  </ul>
                </li>

                <li className="active">
                  <Link to={"#"}>Gallery</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>MultiPage</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Single Page</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Admin Dashboard</Link>
                    </li>
                  </ul>
                </li>

                <li className="active">
                  <Link to={"#"}>Contact</Link>
                  <ul>
                    <li>
                      <Link to={"#"}>MultiPage</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Single Page</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Admin Dashboard</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <span className="toggle_menu hidden-xs">
              <span></span>
            </span>
          </div>
          <div className="flex  justify-center mt-10">
            <div className="flex gap-4 text-center">
              <span className="mt-2">
                <FaFacebook />
              </span>
              |
              <span className="mt-2">
                <FaTwitter />
              </span>
              |
              <span className="mt-2">
                <FaGoogle />
              </span>
              |
              <span className="mt-2">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
