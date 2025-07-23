import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          width: "99vw",
        }}
      >
        {/* Hero Section */}
        <section
          className="d-flex align-items-center justify-content-center text-center"
          style={{
            height: "400px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1400&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-3">
            <h1 className="text-warning fw-bold display-4">Contact Us</h1>
            <p className="text-light mt-3">
              Let’s start building something great together.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section
          style={{
            width: "100%",
            padding: "40px 20px",
            boxSizing: "border-box",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Flex container for office details and form */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {/* Office Details - Left side */}
            <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
              <h3 className="text-warning mb-3">
                <i className="bi bi-chat-dots-fill me-2"></i>
                GET IN TOUCH!
              </h3>
              <p>
                It would be great to hear from you. If you have any question or
                comments, or if you would like to contact us for a quote, please
                use any of the means given below to get in touch with us and we
                will get back to you as soon as possible.
              </p>

              {/* <p>
                            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                            <strong>Address:</strong>{' '}
                            <span className="text-warning">
                                C-5/27, Safdarjung Development Area, New Delhi, Delhi 110016, India
                            </span>
                        </p> */}

              <p className="mt-4">
                <i className="bi bi-telephone-fill me-2 text-warning"></i>
                <strong>Phone:</strong>{" "}
                <a href="tel:+911145136810" className="text-warning">
                  +91 xxxxxxxxxx
                </a>
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2 text-warning"></i>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@krossoverr.com" className="text-warning">
                  Successbrandsol@gmail.com
                </a>
              </p>
            </div>

            {/* Contact Form - Right side */}
            <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
              <h3 className="text-warning mb-3">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-light">
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
                    <label htmlFor="email" className="form-label text-light">
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
                    <label htmlFor="phone" className="form-label text-light">
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
                  <label htmlFor="message" className="form-label text-light">
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
                  style={{}}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Full-width Google Map below */}
          <div
            style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}
          >
            <iframe
              title="KROSSOVERR Location"
              aria-label="Map showing the location of KROSSOVERR Brand Solutions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1355444939882!2d77.19915065803589!3d28.549812726519717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2658673343b%3A0xdd09cc934c6d6b1a!2sC-5%2F27%2C%20SDA%2C%20New%20Delhi%2C%20Delhi%20110016%2C%20India!5e0!3m2!1sen!2sus!4v1717210670585!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
