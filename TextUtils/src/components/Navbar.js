import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../images/Text.png";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: "3.4rem" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5>
                  <Link to="/" className="nav-link active" aria-current="page">
                    {props.home}
                  </Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                  <Link to="/about" className="nav-link">
                    {props.about}
                  </Link>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="m-3">
        <div className="form-check form-switch">
          <input
            onClick={props.changeMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {props.mode === "dark" ? "light" : "dark"} mode
          </label>
        </div>
      </div>
    </>
  );
}

// Prop Types ..........
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

// Default Props .........
// Navbar.defaultProps = {
//   title: "TextUtils",
//   about: "About",
//   home: "Home",
// };
