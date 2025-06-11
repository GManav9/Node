import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../src/assets/logo.png"; // original logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top clean-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            // src={logo}
            alt="Success Brand Solutions"
            className="logo-image"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 responsive-width d-flex justify-content-evenly">
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/services">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
