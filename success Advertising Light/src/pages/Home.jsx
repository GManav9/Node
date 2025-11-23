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
import su from "../assets/Su.jpg";

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

import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";
import Offer4 from "../assets/Offer4.jpg";
import Offer5 from "../assets/Offer5.jpg";
import Offer6 from "../assets/Offer6.jpg";

const services = [
  {
    image: Offer1,
  },
  {
    image: Offer2,
  },
  {
    image: Offer3,
  },
  {
    image: Offer4,
  },
  {
    image: Offer5,
  },
  {
    image: Offer6,
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

import slide1 from "../assets/Banner1.jpg";
import slide2 from "../assets/Banner2.jpg";
import slide3 from "../assets/Banner3.jpg";
import slide4 from "../assets/Banner4.jpg";
import slide5 from "../assets/Banner5.jpg";

const topBannerImages = [slide1, slide2, slide3, slide4, slide5];

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
      <div class="social-sticky">
        <a
          href="https://instagram.com/sample_username"
          target="_blank"
          class="instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          </svg>
        </a>

        <a
          href="https://facebook.com/sample_page"
          target="_blank"
          class="facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.99 3.65 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99C18.35 21.13 22 16.99 22 12z" />
          </svg>
        </a>

        <a
          href="https://wa.me/919725559366?text=Hello%20I%20want%20to%20know%20more"
          target="_blank"
          class="whatsapp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 2.1.55 4.14 1.6 5.94L2 22l4.33-1.69c1.72.94 3.67 1.44 5.71 1.44 5.46 0 9.89-4.43 9.89-9.89S17.5 2 12.04 2zm0 17.98c-1.73 0-3.41-.46-4.88-1.33l-.35-.2-2.57.99.96-2.51-.22-.36a8.63 8.63 0 01-1.33-4.68c0-4.75 3.86-8.61 8.61-8.61s8.61 3.86 8.61 8.61-3.86 8.61-8.61 8.61zm4.7-6.48c-.26-.13-1.54-.77-1.78-.86-.24-.09-.41-.13-.58.13-.17.26-.67.86-.82 1.04-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.07-1.27-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.51-.43-.44-.58-.45-.15-.01-.32-.01-.49-.01a.94.94 0 00-.68.32c-.23.26-.89.87-.89 2.12 0 1.25.91 2.46 1.04 2.63.13.17 1.79 2.73 4.33 3.82.61.26 1.08.41 1.45.53.61.2 1.16.17 1.6.1.49-.07 1.54-.63 1.76-1.24.22-.61.22-1.14.15-1.24-.06-.1-.24-.17-.5-.29z" />
          </svg>
        </a>
      </div>

      {/* Instagram , whatsapp , facebook */}
      {/* <div class="social-sticky">
        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          class="instagram"
        >
          Instagram
        </a>

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          class="facebook"
        >
          Facebook
        </a>

        <a
          href="https://wa.me/919265088148?text=Hello%20I%20want%20to%20know%20more"
          target="_blank"
          class="whatsapp"
        >
          WhatsApp
        </a>
      </div> */}
      {/* Instagram , whatsapp , facebook */}

      {/* ===== Top Banner Slider ===== */}
      <section className="top-banner-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          speed={1500}
        >
          {topBannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="img-fluid top-banner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Offers</h2>

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
                  0: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1080: { slidesPerView: 3 },
                }}
                style={{ width: "100%" }}
                allowTouchMove={true}
                speed={1800}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="card shadow-sm">
                      <img
                        src={service.image}
                        className="card-img-top img-fluid"
                        alt={service.title}
                      />
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
