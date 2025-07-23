import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Work.css";
import workBanner from "../assets/ourwork.jpg";
import workSample from "../assets/work-sample.webp";
import brandImage from "../assets/Picture1.png";
import retailImage from "../assets/Picture2.png";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="work-banner"
        style={{
          backgroundImage: `url(${workBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <div className="work-text">
            <h1>Our Work</h1>
            <p>
              From powerful brand activations to memorable event experiences —
              our portfolio reflects passion, precision, and purpose.
            </p>
            <a href="#our-projects" className="btn-gradient">
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="work-split expanded">
        {/* Block 1 — Image Left, Text Right */}
        <div className="work-split-container">
          <div className="work-split-image">
            <img src={workSample} alt="Exhibition Work" />
          </div>
          <div className="work-split-content">
            <h5>PROJECT HIGHLIGHT</h5>
            <h2>Exhibition Excellence</h2>
            <p>
              We transformed a blank venue into a full-fledged brand arena —
              with immersive booth setups, LED displays, live demos, and
              audience engagement. Our execution helped the brand connect with
              10,000+ visitors.
            </p>
          </div>
        </div>

        {/* Block 2 — Corporate Gifting (Image Right, Text Left) */}
        <div className="work-split-container reverse">
          <div className="work-split-image">
            <img src={retailImage} alt="Corporate Gift Kit" />
          </div>
          <div className="work-split-content">
            <h5>CORPORATE GIFTING</h5>
            <h2>Branded Welcome Kits</h2>
            <p>
              First impressions matter — and our custom welcome kits prove it.
              From branded T-shirts and bottles to gourmet snacks and
              personalized notes, we design memorable unboxing experiences for
              new employees, clients, and partners. It’s not just a gift; it’s
              your brand story delivered with style.
            </p>
          </div>
        </div>
      </section>

      {/* 🔴 Brand Ecosystem Section */}
      <section className="brand-circle-section">
        <div className="container text-center">
          <h2 className="brand-title">Our Brand Ecosystem</h2>
          <div className="brand-circle-image-wrapper">
            <img
              src={brandImage}
              alt="Brand Services Diagram"
              className="brand-circle-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h5>GET IN TOUCH</h5>
          <h2>Contact Us For More Detail</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your e-mail" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Message" required></textarea>
            <button type="submit" className="btn-gradient">
              Send a message
            </button>
          </form>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="grow-together-section">
        <div className="grow-container">
          <h2>Let's Grow Together !</h2>
          <p>
            We build your dream. We are eagerly waiting to lighten your events
            with our innovation.
          </p>
          <a href="/contact" className="grow-btn">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Work;
