import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import newspaperimage from "../src/assets/newspaper.png";
import radio1 from "../src/assets/radio1.png";
import television from "../src/assets/television.png";
import cinema from "../src/assets/cinema.png";
import outofhome from "../src/assets/outofhome.png";
import logo from "../src/assets/logo.png";
import men from "../src/assets/men.jpg";
import women from "../src/assets/women.jpg";

import logo1 from "../src/assets/client1.png";
import logo2 from "../src/assets/client2.png";
import logo3 from "../src/assets/client3.png";
import logo4 from "../src/assets/client4.png";
import logo5 from "../src/assets/client5.png";
import logo6 from "../src/assets/client6.jpg";
import Footer from "../components/Footer";

const services = [
  // {
  //   title: "Newspaper Advertising",
  //   image: newspaperimage,
  //   description:
  //     "Target specific demographics through leading newspaper publications.",
  // },
  {
    title: "Radio Advertising",
    image: radio1,
    description:
      "Leverage the power of radio to increase market share and drive revenue.",
  },
  {
    title: "Television Advertising",
    image: television,
    description:
      "Show and tell a wide audience about your products or services via TV.",
  },
  {
    title: "Cinema Advertising",
    image: cinema,
    description:
      "Engage with a large audience through impactful cinema advertisements.",
  },
  {
    title: "Out Of Home",
    image: outofhome,
    description:
      "Promote your brand through strategic outdoor advertising campaigns.",
  },
  {
    title: "Event Management & Road Shows",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8e8d6d7b8f?auto=compress&cs=tinysrgb&w=800",
    description:
      "Plan and execute engaging events and road shows that leave a lasting impression.",
  },
  {
    title: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8e8d6d7b8f?auto=compress&cs=tinysrgb&w=800",
    description:
      "Build your brand's reputation through effective social media strategies.",
  },
  {
    title: "Integrated 360 Marketing",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8e8d6d7b8f?auto=compress&cs=tinysrgb&w=800",
    description:
      "Implement comprehensive marketing solutions across all platforms.",
  },
];
const reviews = [
  {
    name: "John Doe",
    role: "CEO, Example Corp",
    review:
      "Krossoverr Brand Solutions helped our brand reach new heights with their innovative marketing strategies.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager, Acme Inc",
    review:
      "Professional and creative team delivering beyond expectations. Highly recommend!",
  },
  {
    name: "Alex Johnson",
    role: "Founder, Startup XYZ",
    review:
      "Their attention to detail and strategic thinking made all the difference in our campaign success.",
  },
];

function Home() {
  // Add these lines at the top inside Home function
  const clientPrevRef = useRef(null);
  const clientNextRef = useRef(null);

  const [clientNavPrev, setClientNavPrev] = useState(null);
  const [clientNavNext, setClientNavNext] = useState(null);

  useEffect(() => {
    if (clientPrevRef.current && clientNextRef.current) {
      setClientNavPrev(clientPrevRef.current);
      setClientNavNext(clientNextRef.current);
    }
  }, [clientPrevRef.current, clientNextRef.current]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [navPrev, setNavPrev] = useState(null);
  const [navNext, setNavNext] = useState(null);

  useEffect(() => {
    SwiperCore.use([Navigation]);
  }, []);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavPrev(prevRef.current);
      setNavNext(nextRef.current);
    }
  }, [prevRef.current, nextRef.current]);
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Wavy background */}
            <div className="wavy-bg"></div>

            <div className="hero-text-content">
              <img
                src={logo}
                alt="Krossoverr Brand Solutions"
                style={{
                  width: "240px",
                  marginBottom: "1.5rem",
                  filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))",
                  transition: "filter 0.4s ease-in-out",
                }}
              />
              <h1 className="display-5 fw-bold">
                Empowering Brands with Bold Solutions
              </h1>
              <p className="lead mt-3">
                At <strong>Krossoverr Brand Solutions</strong>, we specialize in
                creating impactful branding, advertising, and marketing
                strategies. From digital content to event activations, MICE to
                corporate gifting, we build compelling brand journeys that
                resonate and perform.
              </p>
              <a href="#services" className="btn btn-lg mt-4 px-5 py-3">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: "10px", maxWidth: "2200px", margin: "0 auto" }}
          >
            {/* Prev Button: Show only on large screens */}
            <button
              ref={prevRef}
              className="btn btn-outline-primary d-none d-lg-inline-flex"
              style={{ height: "40px", flexShrink: 0 }}
            >
              ← Prev
            </button>

            {/* Slider container */}
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                navigation={{ prevEl: navPrev, nextEl: navNext }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                style={{ width: "100%" }}
                allowTouchMove={true}
                speed={1800}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={service.image}
                        className="card-img-top img-fluid"
                        alt={service.title}
                      />
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Next Button: Show only on large screens */}
            <button
              ref={nextRef}
              className="btn btn-outline-primary d-none d-lg-inline-flex"
              style={{ height: "40px", flexShrink: 0 }}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      <section className="welcome-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Left Side Images */}
          <div className="image-stack position-relative mb-4 mb-md-0">
            <img
              src={men}
              alt="Creative Team Collaboration"
              className="img-fluid rounded main-img"
            />
            <img
              src={women}
              alt="Modern Advertising Agency Workspace"
              className="img-fluid rounded overlay-img"
            />
          </div>

          {/* Right Side Text */}
          <div className="ms-md-5 text-section">
            <h2 className="fw-bold">Welcome To Krossoverr Brand Solutions</h2>

            <p className="mt-3">
              We are a brand creativity agency that strives to provide your
              company with a wide range of creative ideas to help your company
              grow and flourish in today’s competitive market.
            </p>
            <p>
              Whether you're a startup or an established enterprise, we bring a
              strategic and thoughtful approach to your brand’s communication.
              Every concept is crafted with precision and backed by industry
              insights, ensuring relevance and maximum impact.
            </p>
            <p>
              At Krossoverr Brand Solutions, we believe branding is more than
              just visuals—it's about telling compelling stories that connect
              with your audience on a deeper level. From logo design and brand
              identity to advertising campaigns and digital content, we turn
              creative thinking into tangible results.
            </p>
            <p>
              Our team of seasoned designers, strategists, and marketers work
              collaboratively to understand your vision and translate it into
              meaningful, measurable outcomes. We align your brand voice with
              the latest trends while staying true to your core values.
            </p>
            <p>
              Since 1985, we’ve proudly supported countless businesses in
              building their presence through personalized service and unmatched
              creativity. Our expertise spans traditional and digital mediums,
              ensuring your message is heard loud and clear across every
              platform.
            </p>
            <p>
              Let Krossoverr Brand Solutions be the partner that propels your
              brand to new heights. Together, we’ll turn ideas into impact.
            </p>

            <a href="#about" className="btn btn-maroon mt-3 px-4 py-2">
              ABOUT US
            </a>
          </div>
        </div>
      </section>

      <section className="client-review-section py-5">
        <div className="container text-center position-relative">
          <h2 className="mb-5 fw-bold text-primary">What Our Clients Say</h2>

          {/* Prev button - visible only on lg and above */}
          <button
            ref={clientPrevRef}
            className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y d-none d-lg-inline-flex"
            style={{ zIndex: 10 }}
            aria-label="Previous Review"
          >
            ←
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            navigation={{ prevEl: clientNavPrev, nextEl: clientNavNext }}
            className="client-review-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className="review-card text-center mx-auto p-4 shadow-sm rounded"
                  style={{ maxWidth: "700px" }}
                >
                  <FaQuoteLeft
                    className="quote-icon mb-3 text-primary"
                    size={40}
                  />
                  <p className="review-text fst-italic">"{review.review}"</p>
                  <h5 className="mt-4 fw-bold">{review.name}</h5>
                  <p className="text-muted">{review.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next button - visible only on lg and above */}
          <button
            ref={clientNextRef}
            className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y d-none d-lg-inline-flex"
            style={{ zIndex: 10 }}
            aria-label="Next Review"
          >
            →
          </button>
        </div>
      </section>

      <section className="choose-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            Why You Should Choose Us For Your Business
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                icon: "bi-bar-chart-fill",
                title: "Strategic",
                desc: "We bring strategic insight to every campaign, ensuring alignment with your business goals.",
              },
              {
                icon: "bi-lightbulb-fill",
                title: "Creative",
                desc: "Our creativity drives standout designs and messages that resonate with your audience.",
              },
              {
                icon: "bi-cpu-fill",
                title: "Production",
                desc: "In-house production capabilities ensure high-quality outputs across media formats.",
              },
              {
                icon: "bi-truck",
                title: "Deliver",
                desc: "From concept to execution, we deliver on time with precision and excellence.",
              },
            ].map((item, index) => (
              <div className="col d-flex" key={index}>
                <div
                  className="flip-card w-100"
                  style={{ perspective: "1000px", width: "100%" }}
                >
                  <div
                    className="flip-card-inner h-100 position-relative rounded-4 shadow text-center"
                    style={{
                      transition: "transform 0.8s",
                      transformStyle: "preserve-3d",
                      height: "100%",
                    }}
                  >
                    {/* FRONT SIDE */}
                    <div
                      className="flip-card-front icon-box h-100 d-flex flex-column justify-content-center align-items-center rounded-4"
                      style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <i className={`bi ${item.icon} fs-1`}></i>
                      <h5 className="mt-3 fw-semibold">{item.title}</h5>
                    </div>

                    <div
                      className="flip-card-back p-4 bg-primary text-white h-100 d-flex flex-column justify-content-center align-items-center rounded-4"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
    .flip-card-inner {
      min-height: 280px; /* Same height for all */
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  `}</style>
      </section>

      <section className="client-slider-section">
        <div className="container text-center">
          <h2 className="client-heading">Our Trusted Clients</h2>
          <div className="swiper-container-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 40 },
              }}
            >
              {[
                logo1,
                logo2,
                logo3,
                logo4,
                logo6,
                logo1,
                logo2,
                logo3,
                logo4,
                logo6,
              ].map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div className="logo-wrapper">
                    <img
                      src={logo}
                      alt={`client-${idx + 1}`}
                      className="client-logo"
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev d-none d-md-flex" />
              <div className="swiper-button-next d-none d-md-flex" />
            </Swiper>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
