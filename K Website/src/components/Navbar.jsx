import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // original logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top clean-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Krossoverr Brand Solutions"
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
              <Link to="/" className="nav-link nav-text">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link nav-text">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Work" className="nav-link nav-text">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-text">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-text">
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

// logo.png
