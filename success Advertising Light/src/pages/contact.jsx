import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import contactBg from "../assets/contactBg.jpg";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
        }}
      ></section>

      {/* Contact Info + Form */}
      <section
        className="d-flex align-items-center"
        style={{ backgroundColor: "#f5f9ff", minHeight: "100vh" }}
      >
        <div className="container px-3 px-md-4 py-5">
          <div className="row gx-4 gy-5">
            {/* Left - Info */}
            <div className="col-12 col-sm-12 col-lg-6 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3 text-primary">
                  Start the Conversation
                </h2>
                <hr
                  style={{
                    width: "60px",
                    borderTop: "3px solid #e30613",
                    marginBottom: "20px",
                  }}
                />
                <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                  Reach out to us and let’s discuss how we can make your ideas
                  come to life. Our team is here to support your vision.
                </p>

                <div className="d-flex align-items-start mb-4">
                  <FaEnvelope size={24} className="me-3 text-primary mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Email Us</h6>
                    <p className="mb-0">successenterpriserjt@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaPhoneAlt size={22} className="me-3 text-primary mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Call Now</h6>
                    <a
                      href="tel:+919725559366"
                      className="mb-0 text-decoration-none text-dark"
                    >
                      +91 9725559366
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaMapMarkerAlt
                    size={26}
                    className="me-3 text-primary mt-1"
                  />
                  <div>
                    <h6 className="fw-bold mb-1">Visit Office</h6>
                    <p className="mb-0">
                      Madhapar Village Gate, Madhapar Chowk, Rajkot-6
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours Box */}
              <div className="bg-white border rounded p-3 shadow-sm mt-4">
                <div className="d-flex align-items-start">
                  <FaClock className="me-3 text-primary mt-1" size={22} />
                  <div>
                    <h6 className="fw-bold mb-1">Office Hours</h6>
                    <p className="mb-1">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    <p className="mb-0">Sunday – Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="col-12 col-sm-12 col-lg-6 d-flex align-items-center">
              <div className="bg-white shadow rounded p-4 p-md-5 w-100">
                <h4 className="fw-bold mb-3">Send Us a Message</h4>
                <p className="text-muted mb-4">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your e-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      rows="5"
                      className="form-control form-control-lg"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-4 py-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <div className="container-fluid px-0">
          {/* <iframe
            title="Success AD Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5768229221974!2d70.78371387491142!3d23.038109216010224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3ab3c68271%3A0xa33c56bfc548ba6b!2sThe%20One%20World!5e0!3m2!1sen!2sin!4v1718519839995!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5800245189776!2d70.764213811934!3d22.331717641669016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9b096b88e69%3A0xb02a86ba6e1fb338!2sSUCCESS%20AD.!5e0!3m2!1sen!2sin!4v1773332253852!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
