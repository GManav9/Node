import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="krossoverr-footer">
      <div className="container">
        <div className="footer-top row">
          {/* Company Info */}
          <div className="col-md-3 col-12 mb-4">
            <h4 className="footer-brand">Success Brand Solutions</h4>
            <p className="footer-description">
              We craft powerful brand experiences with strategic thinking,
              creative excellence, and seamless execution across all channels.
            </p>
            <p className="footer-contact">
              <FaEnvelope /> contact@Success.com
            </p>
            <p className="footer-contact">
              <FaPhoneAlt /> +91 xxxxxxxxxx
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#choose">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-heading">Our Expertise</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Events & Activations</a>
              </li>
              <li>
                <a href="#">Retail Branding</a>
              </li>
              <li>
                <a href="#">Corporate Gifting</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-12 mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="footer-links footer-social-list">
              <li>
                <a href="#">
                  <FaInstagram className="me-2" /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF className="me-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="me-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Success Brand Solutions. All
            rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
