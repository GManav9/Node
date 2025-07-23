import React, { useEffect, useState } from "react";
import "./contact.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import desktopBg from "../assets/contact-desktop.jpg";
import mobileBg from "../assets/contact_small_mobile1.jpg";

const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [backgroundImage, setBackgroundImage] = useState(desktopBg);

  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth <= 768;
      setBackgroundImage(isMobile ? mobileBg : desktopBg);
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          color: "#fff",
          minHeight: "100vh",
          width: "99vw",
        }}
      >
        {/* Hero Section with responsive background image */}
        <section
          className="contact-hero"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></section>

        {/* Background Wrapper */}
        <div className="section-wrapper">
          <section
            className="section"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                <h3 className="mb-3" style={{ color: "#5e2d79" }}>
                  <i
                    className="bi bi-chat-dots-fill me-2"
                    style={{ color: "#5e2d79" }}
                  ></i>
                  GET IN TOUCH!
                </h3>
                <p>
                  It would be great to hear from you. If you have any question
                  or comments, or if you would like to contact us for a quote,
                  please use any of the means given below to get in touch with
                  us and we will get back to you as soon as possible.
                </p>
                <p className="mt-4">
                  <i
                    className="bi bi-telephone-fill me-2"
                    style={{ color: "#5e2d79" }}
                  ></i>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+917011344154" style={{ color: "#5e2d79" }}>
                    +91 7011344154
                  </a>
                </p>
                <p>
                  <i
                    className="bi bi-envelope-fill me-2"
                    style={{ color: "#5e2d79" }}
                  ></i>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:krossoverrbrandsol@gmail.com"
                    style={{ color: "#5e2d79" }}
                  >
                    krossoverrbrandsol@gmail.com
                  </a>
                </p>
              </div>

              {/* Contact Form */}
              <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                <h3 className="mb-3" style={{ color: "#5e2d79" }}>
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ color: "#333333" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{ color: "#333333" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control bg-dark text-white border-secondary"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="phone"
                        className="form-label"
                        style={{ color: "#333333" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control bg-dark text-white border-secondary"
                        id="phone"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="form-label"
                      style={{ color: "#333333" }}
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control bg-dark text-white border-secondary"
                      id="message"
                      rows="5"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="custom-submit-btn btn btn-warning fw-bold w-100"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Google Map */}
        <section>
          <div
            style={{
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <iframe
              title="KROSSOVERR Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1355444939882!2d77.19915065803589!3d28.549812726519717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2658673343b%3A0xdd09cc934c6d6b1a!2sC-5%2F27%2C%20SDA%2C%20New%20Delhi%2C%20Delhi%20110016%2C%20India!5e0!3m2!1sen!2sus!4v1717210670585!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
