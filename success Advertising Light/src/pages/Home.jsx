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

import "swiper/css";
import "swiper/css/navigation";

import News from "../assets/News.jpg";
import radio1 from "../assets/radio1.jpg";

import Televisions from "../assets/Televisions.png";
import Events from "../assets/Events.png";
import cinema from "../assets/cinema.png";
import Hoarding from "../assets/Hoarding.png";
import Social from "../assets/Social.png";
import Marketing360 from "../assets/Marketing360.png";
import logo from "../assets/logo.png";
import su from "../assets/Su.png";

import logo1 from "../assets/client1.png";
import logo2 from "../assets/client2.png";
import logo3 from "../assets/client3.png";
import logo4 from "../assets/client4.png";
import logo5 from "../assets/client5.png";
import logo6 from "../assets/client6.png";
import logo7 from "../assets/client7.png";
import logo8 from "../assets/client8.png";
import logo9 from "../assets/client9.png";
import logo10 from "../assets/client10.png";
import logo11 from "../assets/client11.png";
import logo12 from "../assets/client12.png";
import logo13 from "../assets/client13.png";
import logo14 from "../assets/client14.png";
import logo15 from "../assets/client15.png";
import logo16 from "../assets/client16.png";
import logo17 from "../assets/client17.png";
import logo18 from "../assets/client18.png";
import logo19 from "../assets/client19.png";
import logo20 from "../assets/client20.png";

import Footer from "../components/Footer";

const services = [
  {
    title: "Newspaper Advertising",
    image: News,
    description:
      "Target specific demographics through leading newspaper publications.",
  },
  {
    title: "Radio Advertising",
    image: radio1,
    description:
      "Leverage the power of radio to increase market share and drive revenue.",
  },
  {
    title: "Television Advertising",
    image: Televisions,
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
    image: Hoarding,
    description:
      "Promote your brand through strategic outdoor advertising campaigns.",
  },
  {
    title: "Event Management & Road Shows",
    image: Events,
    description:
      "Plan and execute engaging events and road shows that leave a lasting impression.",
  },
  {
    title: "Social Media Marketing",
    image: Social,
    description:
      "Build your brand's reputation through effective social media strategies.",
  },
  {
    title: "Integrated 360 Marketing",
    image: Marketing360,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className="center-logo">
                <img
                  rel="preload"
                  src={logo}
                  alt="Success Brand Solutions"
                  style={{
                    width: "240px",
                    marginBottom: "1.5rem",
                    filter:
                      "drop-shadow(0 0 6px rgba(255,255,255,0.4)) drop-shadow(0 0 4px rgba(227,6,19,0.25))",
                    transition: "filter 0.4s ease-in-out",
                  }}
                />
              </div>
              <h1 className="display-5 fw-bold">
                Empowering Brands with Bold Solutions
              </h1>
              <p className="lead mt-3">
                At <strong>Success Brand Solutions</strong>, we specialize in
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
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="image-stack">
                <img
                  src={su}
                  alt="Creative Workspace"
                  className="img-fluid rounded main-img"
                />
              </div>
            </div>

            {/* Right Side Text */}
            <div className="col-12 col-md-6 text-section ps-md-4">
              <h2 className="fw-bold">Welcome To Success Brand Solutions</h2>
              <p className="mt-3">
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
                From logo design and brand identity to advertising campaigns and
                digital content, we turn creative thinking into tangible
                results.
              </p>
              <p>
                Our team works collaboratively to understand your vision and
                translate it into meaningful, measurable outcomes.
              </p>
              <p>
                Since 1985, we’ve proudly supported businesses through unmatched
                creativity across traditional and digital platforms.
              </p>
              <p>
                Let Success Brand Solutions be the partner that propels your
                brand to new heights. Together, we’ll turn ideas into impact.
              </p>

              <a href="#about" className="btn btn-maroon mt-3 px-4 py-2">
                ABOUT US
              </a>
            </div>
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
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
                <div className="flip-card w-100">
                  <div className="flip-card-inner h-100 position-relative rounded-4 shadow text-center">
                    {/* FRONT SIDE */}
                    <div className="flip-card-front icon-box h-100 d-flex flex-column justify-content-center align-items-center rounded-4">
                      <i className={`bi ${item.icon} fs-1`}></i>
                      <h5 className="mt-3 fw-semibold">{item.title}</h5>
                    </div>

                    {/* BACK SIDE */}
                    <div className="flip-card-back p-4 text-white h-100 d-flex flex-column justify-content-center align-items-center rounded-4">
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT LOGO SLIDER --- */}
      <section className="client-logo-section">
        <h2 className="section-title">Trusted by Our Clients</h2>
        <div className="container">
          <Swiper
            className="client-logo-swiper"
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            navigation={true}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              576: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              992: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            <SwiperSlide className="client-logo-slide">
              <img src={logo1} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo2} alt="Client 2" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo3} alt="Client 3" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo4} alt="Client 4" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo5} alt="Client 5" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo6} alt="Client 6" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo7} alt="Client 7" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo8} alt="Client 8" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo9} alt="Client 9" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo10} alt="Client 10" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo11} alt="Client 11" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo12} alt="Client 12" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo13} alt="Client 13" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo14} alt="Client 14" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo15} alt="Client 15" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo16} alt="Client 16" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo17} alt="Client 17" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo18} alt="Client 18" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo19} alt="Client 19" />
            </SwiperSlide>
            <SwiperSlide className="client-logo-slide">
              <img src={logo20} alt="Client 20" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Home;
