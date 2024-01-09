import React from "react";
import PropTypes from "prop-types";
// import { a } from "react-router-dom";

export default function Navbar(props) {
  const changeDarkTheme = (theme) => {
    if (theme === "default") {
      props.toggleDarkTheme("default");
    } else if (theme === "Blue") {
      props.toggleDarkTheme("Blue");
    } else if (theme === "Green") {
      props.toggleDarkTheme("Green");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label> */}
            <div className="dropdown-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <button
                      className={`btn btn-sm btn-${props.mode} dropdown-toggle`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {props.mode === "dark" ? "Dark" : "Light"} Mode
                    </button>
                    <ul className={`dropdown-menu dropdown-menu-${props.mode}`}>
                      <li>
                        <label
                          className="dropdown-item"
                          onClick={() => changeDarkTheme("default")}
                        >
                          Default
                        </label>
                      </li>
                      <li>
                        <label
                          className="dropdown-item"
                          onClick={() => changeDarkTheme("Blue")}
                        >
                          Blue
                        </label>
                      </li>
                      <li>
                        <label
                          className="dropdown-item"
                          onClick={() => changeDarkTheme("Green")}
                        >
                          Green
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = { title: "Set Title Here", aboutText: "About Text Here" };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
