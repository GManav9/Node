import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import "./Home.css";
import "./ServicesSection.css";
import "./WelcomeSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Digital Marketing",
    description:
      "We provide strategic digital marketing solutions including SEO, Google Ads, and social media management to help your brand gain maximum online visibility.",
    image:
      "https://img.freepik.com/free-vector/digital-marketing-isometric-landing-page_107791-2274.jpg",
  },
  {
    title: "Web Development",
    description:
      "Get modern, high-performance websites and web applications built using the latest technologies with responsive designs and SEO best practices.",
    image:
      "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
  },
  {
    title: "Branding",
    description:
      "From logo design to complete brand identity, we craft visuals and messaging that resonate with your audience and build recognition.",
    image:
      "https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design_53876-166059.jpg",
  },
  {
    title: "Events & Activations",
    description:
      "We design and execute high-impact on-ground activations and corporate events that create meaningful brand experiences and engagement.",
    image:
      "https://img.freepik.com/free-vector/event-management-abstract-concept_335657-3063.jpg",
  },
  {
    title: "Exhibitions",
    description:
      "Stand out with eye-catching custom exhibition booths, stall fabrication, and full-service event handling tailored to your business needs.",
    image:
      "https://img.freepik.com/free-vector/exhibition-stand-design-concept-illustration_114360-8726.jpg",
  },
];

function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="hero-title">
            Welcome to <span>Krossoverr</span>
          </h1>
          <p className="hero-subtitle mt-3">
            A creative powerhouse shaping brands through design, innovation, and
            strategy.
          </p>
          <button className="btn btn-light hero-btn mt-4">Get Started</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section py-5">
        <div className="container position-relative text-center">
          <h2 className="section-title mb-5">Our Services</h2>

          <button
            ref={prevRef}
            className="btn slider-nav d-none d-lg-inline-flex prev"
          >
            ❮
          </button>
          <button
            ref={nextRef}
            className="btn slider-nav d-none d-lg-inline-flex next"
          >
            ❯
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2500 }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card p-3">
                  <div className="service-image-wrapper mb-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid service-image"
                    />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-desc">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* WELCOME TO KROSSOVERR SECTION */}
      <section className="welcome-section py-5">
        <div className="container">
          <div className="welcome-wrapper d-flex flex-column flex-lg-row align-items-center justify-content-between">
            {/* LEFT IMAGE SIDE */}
            <div className="welcome-images position-relative mb-4 mb-lg-0">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300642.jpg"
                alt="Team Collaboration"
                className="main-image img-fluid rounded shadow"
              />
              <img
                src="https://img.freepik.com/free-photo/side-view-woman-working-laptop_23-2149300629.jpg"
                alt="Office Setup"
                className="overlay-image position-absolute rounded shadow"
              />
            </div>

            {/* RIGHT TEXT SIDE */}
            <div className="welcome-text text-white">
              <h2 className="fw-bold mb-4">
                Welcome To Krossoverr Brand Solutions
              </h2>
              <p>
                We are a brand creativity agency that strives to provide your
                company with a wide range of creative ideas to help your company
                grow and flourish in today’s competitive market.
              </p>
              <p>
                Whether you're a startup or an established enterprise, we bring
                a strategic and thoughtful approach to your brand’s
                communication.
              </p>
              <p>
                Let Krossoverr Brand Solutions be the partner that propels your
                brand to new heights. Together, we’ll turn ideas into impact.
              </p>
              <button className="btn about-btn mt-3">ABOUT US</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
