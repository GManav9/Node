import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../assets/logo.png";
import logo1 from "../assets/logowhite.png";

import Collapse from "bootstrap/js/dist/collapse";

const Navbar = () => {
  const navbarCollapseRef = useRef(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Toggle collapse on nav-link click (mobile)
  useEffect(() => {
    const bsCollapse = new Collapse(navbarCollapseRef.current, {
      toggle: false,
    });

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth < 992 && !e.target.closest(".custom-dropdown")) {
          bsCollapse.hide();
        }
      });
    });

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
      dropdownItems.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  // Toggle Services dropdown (only mobile)
  const toggleMobileDropdown = () => {
    if (window.innerWidth < 992) {
      setIsMobileDropdownOpen(!isMobileDropdownOpen);
    }
  };

  // Toggle navbar collapse on mobile button click
  const handleToggleNavbar = () => {
    const bsCollapse = new Collapse(navbarCollapseRef.current, {
      toggle: false,
    });
    if (navbarCollapseRef.current.classList.contains("show")) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top clean-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            rel="preload"
            src={logo1}
            alt="Success Brand Solutions"
            className="logo-image"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navbarCollapseRef}
        >
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
              <span
                className="nav-link nav-text"
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/brochure.pdf")}
              >
                Brochure
              </span>
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
