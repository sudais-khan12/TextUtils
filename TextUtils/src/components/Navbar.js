import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <p className="navbar-brand mt-3" href="\">
            {props.title}
          </p>
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
                <a className="nav-link active" aria-current="page" href="\">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\">
                  {props.about}
                </a>
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
