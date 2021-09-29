import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                {props.Home}
              </Link>
              <Link className="nav-link" to="/about">
                {props.About}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    Home: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "Title here",
    Home: "Home here",
    About: "About here",
}

