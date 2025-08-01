import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import "./About.css"; // ✅ required!
import aboutImg from "../assets/aboutImg.png";
import { FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa"; // at the top of About.jsx

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: "90vh",
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold text-shadow">Who We Are</h1>
          <p className="lead mt-3">Building brands with purpose and passion</p>
        </div>
      </section>

      {/* Welcome Section - Redesigned, no image */}
      <section
        className="welcome-section d-flex align-items-center"
        style={{
          minHeight: "70vh",
          background: "",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2 className="fw-bold display-5 text-light mb-4">
                Success Enterprises — Our Journey
              </h2>
              <p className="fs-5 text-light mb-4">
                At Success Enterprises, we don’t just promote brands — we help
                build them from the ground up. Our journey has been defined by
                bold ideas, strategic thinking, and a relentless pursuit of
                excellence.
              </p>
              <p className="fs-5 text-light mb-4">
                From outdoor banners to integrated campaigns, we’ve brought
                countless brands into the spotlight. Our process is rooted in
                research, refined through design, and realized through impact.
              </p>
              <p className="fs-5 text-light mb-4">
                Whether you’re a startup or a legacy business, our passion is
                helping you grow, connect, and shine.
              </p>
              <a href="/contact" className="btn btn-maroon px-5 py-3 mt-3">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us - Modernized */}
      <section
        className="services-section py-5"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">
            What Drives Us
          </h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="service-box p-4 rounded shadow h-100 bg-white border-top border-4 border-primary">
                <div className="icon-box mb-3">
                  <FaBullseye size={60} className="text-primary" />
                </div>
                <h5 className="fw-bold text-dark mb-3">Our Mission</h5>
                <p>
                  Empower businesses through impactful advertising that
                  inspires, informs, and delivers measurable results.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 rounded shadow h-100 bg-white border-top border-4 border-danger">
                <div className="icon-box mb-3">
                  <FaLightbulb size={60} className="text-danger" />
                </div>
                <h5 className="fw-bold text-dark mb-3">Our Vision</h5>
                <p>
                  To become India’s most trusted name in branding, marketing,
                  and media communication.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 rounded shadow h-100 bg-white border-top border-4 border-success">
                <div className="icon-box mb-3">
                  <FaHandshake size={60} className="text-success" />
                </div>
                <h5 className="fw-bold text-dark mb-3">Our Values</h5>
                <p>
                  Creativity. Commitment. Collaboration. These drive everything
                  we do, from concept to execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="timeline-section py-5"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h5 className="fw-bold text-danger">2015 – The Beginning</h5>
                <p>
                  Success Enterprises was founded with a bold vision to redefine
                  how brands connect with audiences.
                </p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h5 className="fw-bold text-danger">2018 – Rapid Growth</h5>
                <p>
                  Partnered with major clients in retail and events, expanding
                  to pan-India presence.
                </p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h5 className="fw-bold text-danger">
                  2021 – Digital Breakthrough
                </h5>
                <p>
                  Launched digital-first campaigns using advanced media tools
                  and analytics.
                </p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h5 className="fw-bold text-danger">2024 – Global Reach</h5>
                <p>
                  Expanded our services internationally, building a global
                  network of brand partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
