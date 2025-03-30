import React from "react";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="col-md-3 text-center text-md-left">
      <ul className="flex space-x-6 justify-center md:justify-start">
        <li className="flex gap-3 dropdown login-dropdown">
          <Link
            className="header-button mt-2"
            to="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            role="button"
            aria-expanded="false"
          >
            {/* <i className="fa fa-user"></i> */}
            <FiLogIn />
          </Link>
          <span className="header-button-text me-2">Login</span>|
          <div className="dropdown-menu ls with_padding">
            <p>
              <strong className="grey">
                If you have an account, please log in:
              </strong>
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="login_email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="login_email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="login_password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="login_password"
                  placeholder="Password"
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" id="remember_checkbox" />
                <label htmlFor="remember_checkbox"> Remember Me </label>
              </div>

              <button
                type="button"
                className="theme_button color1 block_button"
              >
                Log in
              </button>
            </form>
            <div className="topmargin_20 darklinks">
              <Link>Forgot Your Password?</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3">
          <Link className="header-button mt-2" to={"#"}>
            <FaUser />
          </Link>
          <span className="header-button-text">Register</span>
        </li>
      </ul>
    </div>
  );
};

export default Login;
