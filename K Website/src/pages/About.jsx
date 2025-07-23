import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import about from "../assets/About.jpg"; // ✅ Correct import (lowercase 'about')
import exhibitionBooth from "../assets/exhibitionBooth.png"; // ✅ React-style import
import { FaArrowRight } from "react-icons/fa";

import clientLogoImage from "../assets/Picture3.png";

import {
  FaStoreAlt,
  FaBoxOpen,
  FaRoad,
  FaTruck,
  FaProjectDiagram,
  FaShoppingBag,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Full Image Banner Section */}
      <section
        className="about-banner"
        style={{
          backgroundImage: `url(${about})`, // ✅ Correct usage
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              Welcome to <strong>Krossoverr Advertising</strong> — a dynamic,
              result-driven agency that blends creative vision with strategic
              execution. We build brands, design experiences, and deliver
              impactful campaigns across digital, print, and outdoor media.
            </p>
            <a href="#mission" className="btn-maroon">
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Split Section (Image Left - Text Right) */}
      <section className="about-split">
        <div className="about-split-container">
          <div className="about-split-image">
            <img src={exhibitionBooth} alt="Krossoverr Booth" />
          </div>
          <div className="about-split-content">
            <h5>ABOUT</h5>
            <h2>Krossoverr Advertising</h2>
            <p>
              Krossoverr is a full-service advertising agency that bridges
              creativity and strategy. From exhibitions to corporate branding,
              we turn business ideas into visual impact across multiple
              platforms. Our team ensures every campaign is sharp, engaging, and
              results-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Offering Section */}
      <section className="offerings-section">
        <h2 className="offerings-title">We Are Offerings</h2>
        <div className="offerings-container">
          <ul className="offerings-column">
            <li>
              <FaArrowRight /> Loan Cam Exchange
            </li>
            <li>
              <FaArrowRight /> Promotional Events & Displays
            </li>
            <li>
              <FaArrowRight /> Party Decorations
            </li>
            <li>
              <FaArrowRight /> Enamel Painting
            </li>
            <li>
              <FaArrowRight /> Demo Program
            </li>
            <li>
              <FaArrowRight /> Airport Activation
            </li>
            <li>
              <FaArrowRight /> GSB Customize & Fixed
            </li>
            <li>
              <FaArrowRight /> Front Lit Boards
            </li>
          </ul>
          <ul className="offerings-column">
            <li>
              <FaArrowRight /> Kiosk Fabrication
            </li>
            <li>
              <FaArrowRight /> Hoardings
            </li>
            <li>
              <FaArrowRight /> LED/LCD Display
            </li>
            <li>
              <FaArrowRight /> Highway/Street Branding
            </li>
            <li>
              <FaArrowRight /> Video On Wheel
            </li>
            <li>
              <FaArrowRight /> Mandi Sales Activation
            </li>
            <li>
              <FaArrowRight /> Nukkad Natak
            </li>
            <li>
              <FaArrowRight /> Cycle Add
            </li>
          </ul>
        </div>
      </section>

      {/* services-grid-section */}
      <section className="services-grid-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <FaStoreAlt className="service-icon" />
            <span>Exhibitions</span>
          </div>
          <div className="service-item">
            <FaBoxOpen className="service-icon" />
            <span>Product Launch</span>
          </div>
          <div className="service-item">
            <FaRoad className="service-icon" />
            <span>Road Shows</span>
          </div>
          <div className="service-item">
            <FaTruck className="service-icon" />
            <span>Cycle & Van Advertisement</span>
          </div>
          <div className="service-item">
            <FaProjectDiagram className="service-icon" />
            <span>Government Projects</span>
          </div>
          <div className="service-item">
            <FaShoppingBag className="service-icon" />
            <span>Shop Branding</span>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos-section">
        <h2 className="client-logos-title">Our Trusted Clients</h2>
        <div className="client-logos-wrapper">
          <img src={clientLogoImage} alt="Trusted Clients" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
