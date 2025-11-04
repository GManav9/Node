import React, { useState, useEffect } from "react";
import "./Services.css";
import mainImage from "../assets/Main.jpg";
import servicesImage from "../assets/AllServices.jpg";
import flexBanner from "../assets/flex.png";
import AutoRicksaw from "../assets/AutoRicksaw2.jpg";

import ho from "../assets/ho.jpg";
import AcpBoardImg from "../assets/acpboard.jpg"; // adjust path as needed
import OO from "../assets/OO.jpg";
import pamphlet from "../assets/pamphlet.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaTimes } from "react-icons/fa";
import {
  FaBullhorn,
  FaNewspaper,
  FaFilm,
  FaTv,
  FaBroadcastTower,
  FaCalendarCheck,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPrices, setShowPrices] = useState(false);

  const handleShowPrices = () => {
    setShowPrices(true);
  };

  const handleHidePrices = () => {
    setShowPrices(false);
  };

  const [showRickshawPrices, setShowRickshawPrices] = useState(false);

  const handleShowRickshawPrices = () => setShowRickshawPrices(true);
  const handleHideRickshawPrices = () => setShowRickshawPrices(false);

  const [showPollboardPrices, setShowPollboardPrices] = useState(false);

  const handleShowPollboardPrices = () => setShowPollboardPrices(true);
  const handleHidePollboardPrices = () => setShowPollboardPrices(false);

  // ACP Board Toggle State
  const [showAcpPrices, setShowAcpPrices] = useState(false);

  const handleShowAcpPrices = () => {
    setShowAcpPrices(true);
  };

  const handleHideAcpPrices = () => {
    setShowAcpPrices(false);
  };

  const [showPrice, setShowPrice] = useState(false);

  const [showHoardingPrices, setShowHoardingPrices] = useState(false);

  const handleShowHoardingPrices = () => setShowHoardingPrices(true);
  const handleHideHoardingPrices = () => setShowHoardingPrices(false);

  const [showFlexPrice, setShowFlexPrice] = useState(false);
  const toggleFlexPrice = () => setShowFlexPrice(!showFlexPrice);

  const [showPamphletPrices, setShowPamphletPrices] = useState(false);
  const [activePamphletTab, setActivePamphletTab] = useState("A8");

  const handleShowPamphletPrices = () => setShowPamphletPrices(true);
  const handleHidePamphletPrices = () => setShowPamphletPrices(false);

  const services = [
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "SEO, Social Media, Google Ads & more to amplify your online reach.",
    },
    {
      icon: <FaNewspaper />,
      title: "Newspaper Advertising",
      desc: "Ad placements across major newspapers in regional and national reach.",
    },
    {
      icon: <FaFilm />,
      title: "Cinema Advertising",
      desc: "Engage viewers with high-impact ads in cinema halls.",
    },
    {
      icon: <FaTv />,
      title: "Television Advertising",
      desc: "Create brand awareness with targeted TV channel campaigns.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Radio Advertising",
      desc: "Promote through popular FM channels for massive local reach.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Event Management & Roadshows",
      desc: "From planning to execution, we make events impactful.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0 text-content">
                <h1>Your Growth, Our Passion</h1>
                <p>
                  We provide full-scale marketing, branding, and event services
                  to help your business thrive in every direction.
                </p>
              </div>
              <div className="col-12 col-lg-6 text-center image-wrapper">
                <img
                  rel="preload"
                  src={mainImage}
                  alt="Main Services"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="highlight-section">
          <div className="container">
            <h2 className="section-title text-center mb-5">What We Offer</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                <img
                  rel="preload"
                  src={servicesImage}
                  alt="All Services"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="row">
                  {services.map((service, index) => (
                    <div
                      className="col-12 col-sm-6 d-flex justify-content-center mb-4"
                      key={index}
                    >
                      <div className="service-card w-100">
                        <div className="icon-wrapper">{service.icon}</div>
                        <h5>{service.title}</h5>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flex Banner Section */}
        <section className="flex-banner-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">
              Flex Banner & Rollup Standee
            </h2>
            <div className="row align-items-stretch">
              {/* Image Side */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex">
                <img
                  src={flexBanner}
                  alt="Flex Banner"
                  className="flex-image img-fluid mx-auto align-self-center"
                />
              </div>

              {/* Content/Price Side */}
              <div className="col-md-6 d-flex align-items-stretch">
                {!showPrices ? (
                  <div className="flex-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        Looking to create a bold impression at events or on the
                        streets? Our Flex Banners and Rollup Standees are your
                        go-to solution. Whether for retail branding, political
                        campaigns, or grand openings, we deliver eye-catching
                        prints that speak volumes.
                      </p>
                      <p className="mb-3">
                        Crafted using high-grade material and long-lasting inks,
                        these prints ensure excellent outdoor and indoor
                        visibility. Our flex banners come in standard or star
                        quality depending on your durability needs.
                      </p>
                      <p className="mb-3">
                        Rollup standees are perfect for businesses constantly on
                        the move — easy to assemble, highly portable, and
                        delivered with a sturdy aluminum frame and carry case.
                      </p>
                      <p className="mb-3">
                        Choose from different sizes, designs, and branding
                        options. We also offer bulk printing with fast
                        turnaround time. You can opt for only flex print, full
                        flex + frame, or even go premium with vinyl on sunboard.
                      </p>
                      <p className="mb-4">
                        Trusted by over 300 clients, we ensure top quality,
                        vivid colors, and timely delivery — no matter your
                        quantity.
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="price-box-container animate-slide-in w-100 position-relative">
                    <div className="price-card position-relative">
                      <button className="close-icon" onClick={handleHidePrices}>
                        ✕
                      </button>
                      <h4 className="mb-3">
                        Flex Banner & Rollup Standee Pricing
                      </h4>
                      <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                          <tr>
                            <th>Material</th>
                            <th>Rate (Sq. Ft.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>China Flex</td>
                            <td>₹5.5/-</td>
                          </tr>
                          <tr>
                            <td>Black Back</td>
                            <td>₹8/-</td>
                          </tr>
                          <tr>
                            <td>Star</td>
                            <td>₹11/-</td>
                          </tr>
                          <tr>
                            <td>Backlit</td>
                            <td>₹18/-</td>
                          </tr>
                          <tr>
                            <td>Vinyl</td>
                            <td>₹12/-</td>
                          </tr>
                          <tr>
                            <td>Frame Banner</td>
                            <td>₹30/-</td>
                          </tr>
                          <tr>
                            <td>Eco Vinyl</td>
                            <td>₹18/-</td>
                          </tr>
                          <tr>
                            <td>Eco Vinyl + Lemi.</td>
                            <td>₹27/-</td>
                          </tr>
                          <tr>
                            <td>Eco Lemi. + 3mm Foam</td>
                            <td>₹48/-</td>
                          </tr>
                          <tr>
                            <td>Eco Lemi. + 5mm Foam</td>
                            <td>₹60/-</td>
                          </tr>
                          <tr>
                            <td>Retro Flex</td>
                            <td>₹30/-</td>
                          </tr>
                          <tr>
                            <td>Rollup Standy</td>
                            <td>₹999/-</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-muted small mt-2">
                        * Terms & Conditions Apply
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Auto Rickshaw Advertising Section */}
        <section className="auto-rickshaw-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">
              Auto Rickshaw Advertising
            </h2>
            <div className="row align-items-stretch flex-md-row-reverse">
              {/* Image Side - Right */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex">
                <img
                  src={AutoRicksaw}
                  alt="Auto Rickshaw"
                  className="auto-rickshaw-image img-fluid mx-auto align-self-center"
                />
              </div>

              {/* Content/Price Side - Left */}
              <div className="col-md-6 d-flex align-items-stretch">
                {!showRickshawPrices ? (
                  <div className="auto-rickshaw-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        Auto rickshaw ads offer unmatched local reach and are
                        visible across busy roads, markets, and neighborhoods.
                        Tap into this budget-friendly, high-frequency
                        advertising medium. Our rickshaw branding is
                        weather-proof, durable, and ensures thousands of
                        impressions daily.
                      </p>
                      <p className="mb-3">
                        Whether it's back-panel ads or full body wraps, our
                        expert team ensures accurate placement, design quality,
                        and on-time execution. Choose city-wise targeting or PAN
                        India campaigns.
                      </p>
                      <p className="mb-3">
                        Branding material includes sunboard or vinyl prints with
                        lamination. We also provide rickshaw driver onboarding
                        and tracking.
                      </p>
                      <p className="mb-3">
                        Available in all major metros: Mumbai, Delhi, Ahmedabad,
                        Pune, Bengaluru. High ROI guaranteed with daily movement
                        visibility.
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowRickshawPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="auto-rickshaw-price-box animate-slide-in w-100 position-relative">
                    <button
                      className="close-icon"
                      onClick={handleHideRickshawPrices}
                    >
                      ✕
                    </button>

                    <h4 className="price-heading">
                      Auto Rickshaw Advertising Rates
                    </h4>

                    <div className="price-type-card">
                      <h5>Rickshaw Vinyl Ad</h5>
                      <ul>
                        <li>
                          📏 Size: 3 x 1.5 ft – ₹70{" "}
                          <small>(Min. 100 Qty)</small>
                        </li>
                        <li>
                          📏 Size: 2.5 x 1.5 ft – ₹65{" "}
                          <small>(Min. 100 Qty)</small>
                        </li>
                      </ul>
                    </div>

                    <div className="price-type-card mt-4">
                      <h5>Rickshaw Wood Ad</h5>
                      <ul>
                        <li>
                          📏 Size: Full Wood – ₹599{" "}
                          <small>(Min. 200 Qty)</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="flex-example-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">Poll Board</h2>
            <div className="row align-items-stretch">
              {/* Image Side */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex">
                <img
                  src={OO}
                  alt="Poll Board Advertising"
                  className="flex-image1 img-fluid mx-auto align-self-center"
                />
              </div>

              {/* Content/Price Side */}
              <div className="col-md-6 d-flex align-items-stretch">
                {!showPollboardPrices ? (
                  <div className="flex-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        Poll Board advertising is a powerful way to reach
                        thousands of people on the streets. These vertical
                        banners, fixed on electrical poles or road dividers,
                        offer maximum visibility and local targeting at a low
                        cost.
                      </p>
                      <p className="mb-3">
                        Whether you're running a political campaign, promoting a
                        local business, hosting an event, or launching a store,
                        poll boards ensure your message is seen by all passing
                        traffic.
                      </p>
                      <p className="mb-4">
                        We provide high-quality printing and pole-mounting
                        services in various material options including China
                        Flex and BB Flex with pasting. Choose size, quantity,
                        and location — we’ll handle the rest!
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowPollboardPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="price-box-container animate-slide-in w-100 position-relative">
                    <div className="price-card position-relative">
                      <button
                        className="close-icon"
                        onClick={handleHidePollboardPrices}
                      >
                        ✕
                      </button>
                      <h4 className="mb-3">Poll Board Printing Price List</h4>

                      <table className="table table-bordered custom-pollboard-table">
                        <thead className="table-dark text-center">
                          <tr>
                            <th>Size</th>
                            <th>China Flex + Pasting</th>
                            <th>BB Flex + Pasting</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>4x3</td>
                            <td>₹150</td>
                            <td>₹220</td>
                          </tr>
                          <tr>
                            <td>6x3</td>
                            <td>₹220</td>
                            <td>₹300</td>
                          </tr>
                          <tr>
                            <td>8x3</td>
                            <td>₹290</td>
                            <td>₹390</td>
                          </tr>
                          <tr>
                            <td>10x3</td>
                            <td>₹370</td>
                            <td>₹470</td>
                          </tr>
                          <tr>
                            <td>12x3</td>
                            <td>₹450</td>
                            <td>₹550</td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="text-muted small mt-2">
                        * Installation charges may vary based on area and
                        quantity.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ACP Board Advertising Section */}
        <section className="acp-board-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">
              ACP Board Advertising
            </h2>
            <div className="row align-items-stretch flex-md-row-reverse">
              {/* Image Side - Right */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex">
                <img
                  src={AcpBoardImg}
                  alt="ACP Board Advertising"
                  className="acp-board-image img-fluid mx-auto align-self-center"
                />
              </div>

              {/* Content / Price Toggle - Left */}
              <div className="col-md-6 d-flex align-items-stretch">
                {!showAcpPrices ? (
                  <div className="acp-board-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        ACP board advertising offers a premium and durable
                        branding solution perfect for shop fronts, institutes,
                        and businesses. The bold visual impact attracts high
                        local attention.
                      </p>
                      <p className="mb-3">
                        We provide custom ACP boards with high-quality vinyl
                        prints, LED options, and custom frame work. Ideal for
                        educational institutes, retail outlets, and corporate
                        signage.
                      </p>
                      <p className="mb-3">
                        Whether you want regular square boards or creative
                        diamond-style layouts as shown, we provide full
                        design-to-installation service across multiple cities.
                      </p>
                      <p className="mb-3">
                        Available in various sizes and finishes to suit your
                        branding needs.
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowAcpPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="acp-board-price-box animate-slide-in w-100 position-relative">
                    <button
                      className="close-icon"
                      onClick={handleHideAcpPrices}
                    >
                      ✕
                    </button>
                    <h4 className="price-heading">ACP BOARD RATES</h4>

                    <div className="price-type-card">
                      <h5>ACP Board with Frame & Labour</h5>
                      <ul>
                        <li>
                          Includes: 1x1 GI Pipe + 3mm ACP Sheet + Labour Work
                        </li>
                        <li>Rate: ₹190/- Per Ft.</li>
                      </ul>
                    </div>

                    <h4 className="price-heading mt-4">
                      CORRUGATED BANNER RATES
                    </h4>

                    <div className="table-responsive">
                      <table className="table table-bordered table-sm price-table">
                        <thead className="table-light text-center">
                          <tr>
                            <th>SIZE</th>
                            <th>QTY.</th>
                            <th>SINGLE COLOR</th>
                            <th>FOUR COLOR</th>
                            <th>FITTING</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>12x18</td>
                            <td>112</td>
                            <td>18/-</td>
                            <td>35/-</td>
                            <td>15/-</td>
                          </tr>
                          <tr>
                            <td>12x18</td>
                            <td>256</td>
                            <td>17.5/-</td>
                            <td>34/-</td>
                            <td>15/-</td>
                          </tr>
                          <tr>
                            <td>12x18</td>
                            <td>512</td>
                            <td>17/-</td>
                            <td>33/-</td>
                            <td>15/-</td>
                          </tr>
                          <tr>
                            <td>18x24</td>
                            <td>112</td>
                            <td>30/-</td>
                            <td>60/-</td>
                            <td>20/-</td>
                          </tr>
                          <tr>
                            <td>18x24</td>
                            <td>256</td>
                            <td>29/-</td>
                            <td>58/-</td>
                            <td>20/-</td>
                          </tr>
                          <tr>
                            <td>18x24</td>
                            <td>512</td>
                            <td>28/-</td>
                            <td>55/-</td>
                            <td>20/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <small className="text-muted d-block mt-2">
                      *Terms & Conditions Apply
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* hoarding section */}
        <section className="hoarding-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">
              Hoarding Advertising
            </h2>
            <div className="row align-items-stretch">
              {/* Image Side */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex">
                <img
                  src={ho}
                  alt="Hoarding Advertising"
                  className="hoarding-image1 img-fluid mx-auto align-self-center"
                />
              </div>

              {/* Content/Price Side */}
              <div className="col-md-6 d-flex align-items-stretch">
                {!showHoardingPrices ? (
                  <div className="hoarding-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        Hoarding Advertising is one of the most impactful
                        outdoor marketing strategies to attract the masses.
                        These large-format displays are placed in high-traffic
                        areas to ensure maximum visibility.
                      </p>
                      <p className="mb-3">
                        Perfect for promoting real estate projects, coaching
                        institutes, local businesses, or political campaigns —
                        hoardings are eye-catching and deliver strong recall
                        value.
                      </p>
                      <p className="mb-4">
                        We offer design, printing, and site installation for
                        hoardings of various sizes. Choose high-quality BB flex
                        material and let us help you dominate the outdoor space.
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowHoardingPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="hoarding-price-box-container animate-slide-in w-100 position-relative">
                    <div className="price-card position-relative">
                      <button
                        className="close-icon"
                        onClick={handleHideHoardingPrices}
                      >
                        ✕
                      </button>
                      <h4 className="mb-3">Hoarding Printing Price List</h4>

                      {/* --- Table 1 --- */}
                      <h5 className="mb-3 text-uppercase">
                        4x2 I-Channel + 1.5x1.5 Pipe + BB Flex + Pasting +
                        Design + Labor Work
                      </h5>
                      <table className="table table-bordered text-center custom-pollboard-table">
                        <thead className="table-dark">
                          <tr>
                            <th>Size</th>
                            <th>1 Side</th>
                            <th>2 Side</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>15x10</td>
                            <td>₹27,500/-</td>
                            <td>₹32,999/-</td>
                          </tr>
                          <tr>
                            <td>20x10</td>
                            <td>₹33,333/-</td>
                            <td>₹38,999/-</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* --- Table 2 --- */}
                      <h5 className="mt-5 mb-3 text-uppercase">
                        2x2 Pipe + BB Flex + Pasting + Design + Labor Work
                      </h5>
                      <table className="table table-bordered text-center custom-pollboard-table">
                        <thead className="table-dark">
                          <tr>
                            <th>Size</th>
                            <th>1 Side</th>
                            <th>2 Side</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>8x5</td>
                            <td>₹7,000/-</td>
                            <td>₹7,500/-</td>
                          </tr>
                          <tr>
                            <td>10x8</td>
                            <td>₹13,500/-</td>
                            <td>₹14,500/-</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* --- Table 3 --- */}
                      <h5 className="mt-5 mb-3 text-uppercase">
                        3x1.5 C-Channel + 1.5x1.5 Pipe + BB Flex + Pasting +
                        Design + Labor Work
                      </h5>
                      <table className="table table-bordered text-center custom-pollboard-table">
                        <thead className="table-dark">
                          <tr>
                            <th>Size</th>
                            <th>1 Side</th>
                            <th>2 Side</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>10x10</td>
                            <td>₹16,500/-</td>
                            <td>₹17,500/-</td>
                          </tr>
                          <tr>
                            <td>10x12</td>
                            <td>₹17,700/-</td>
                            <td>₹19,200/-</td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="text-muted small mt-3">
                        * Installation and site rental charges vary based on
                        location and duration.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pamphlet Design & Printing Section */}
        <section className="pamphlet-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-4">
              Pamphlet Design & Printing
            </h2>
            <div className="row align-items-stretch">
              {/* Content / Price Toggle - Left */}
              <div className="col-md-6 d-flex align-items-stretch order-2 order-md-1">
                {!showPamphletPrices ? (
                  <div className="pamphlet-content-box animate-slide-in d-flex flex-column justify-content-evenly">
                    <div>
                      <p className="mb-3">
                        Pamphlets are a great way to promote businesses, events,
                        and offers in a cost-effective way. Ideal for local
                        distribution and bulk campaigns.
                      </p>
                      <p className="mb-3">
                        We offer high-quality pamphlet design and printing
                        services with various size and paper options. Perfect
                        for restaurants, retail, and service businesses.
                      </p>
                      <p className="mb-3">
                        Eye-catching designs, vibrant colors, and attractive
                        layouts help deliver your message clearly and
                        effectively to your target audience.
                      </p>
                      <p className="mb-3">
                        Get fast turnaround, doorstep delivery, and bulk
                        discounts on large orders.
                      </p>
                    </div>
                    <button
                      className="gradient-btn align-self-start"
                      onClick={handleShowPamphletPrices}
                    >
                      Show Prices
                    </button>
                  </div>
                ) : (
                  <div className="pamphlet-price-box animate-slide-in w-100 position-relative">
                    <button
                      className="close-icon"
                      onClick={handleHidePamphletPrices}
                    >
                      ✕
                    </button>
                    <h4 className="price-heading">Pamphlet Printing Rates</h4>

                    {/* TAB BUTTONS */}
                    <div className="btn-group mb-3">
                      <button
                        className={`btn btn-outline-primary ${
                          activePamphletTab === "A8" ? "active" : ""
                        }`}
                        onClick={() => setActivePamphletTab("A8")}
                      >
                        A8 Size
                      </button>
                      <button
                        className={`btn btn-outline-primary ${
                          activePamphletTab === "A4" ? "active" : ""
                        }`}
                        onClick={() => setActivePamphletTab("A4")}
                      >
                        A4 Size
                      </button>
                    </div>

                    {/* A8 Table */}
                    {activePamphletTab === "A8" && (
                      <>
                        <h5 className="mt-3 mb-2 fw-bold text-primary">
                          A8 SIZE (5.5 x 8.5) – 90 GSM ART PAPER
                        </h5>
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm text-center price-table">
                            <thead className="table-light">
                              <tr>
                                <th>Qty</th>
                                <th>1 Side</th>
                                <th>2 Side</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1000</td>
                                <td>-</td>
                                <td>2715/-</td>
                              </tr>
                              <tr>
                                <td>2000</td>
                                <td>2225/-</td>
                                <td>3580/-</td>
                              </tr>
                              <tr>
                                <td>3000</td>
                                <td>3320/-</td>
                                <td>4250/-</td>
                              </tr>
                              <tr>
                                <td>4000</td>
                                <td>3920/-</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>5000</td>
                                <td>4420/-</td>
                                <td>4680/-</td>
                              </tr>
                              <tr>
                                <td>10000</td>
                                <td>7280/-</td>
                                <td>7930/-</td>
                              </tr>
                              <tr>
                                <td>15000</td>
                                <td>9750/-</td>
                                <td>10625/-</td>
                              </tr>
                              <tr>
                                <td>20000</td>
                                <td>12500/-</td>
                                <td>13500/-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    {/* A4 Table */}
                    {activePamphletTab === "A4" && (
                      <>
                        <h5 className="mt-4 mb-2 fw-bold text-primary">
                          A4 SIZE (8.5 x 11) – 90 GSM ART PAPER
                        </h5>
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm text-center price-table">
                            <thead className="table-light">
                              <tr>
                                <th>Qty</th>
                                <th>1 Side</th>
                                <th>2 Side</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1000</td>
                                <td>2225/-</td>
                                <td>2715/-</td>
                              </tr>
                              <tr>
                                <td>2000</td>
                                <td>3920/-</td>
                                <td>4250/-</td>
                              </tr>
                              <tr>
                                <td>3000</td>
                                <td>5140/-</td>
                                <td>5400/-</td>
                              </tr>
                              <tr>
                                <td>4000</td>
                                <td>6630/-</td>
                                <td>6630/-</td>
                              </tr>
                              <tr>
                                <td>5000</td>
                                <td>7280/-</td>
                                <td>7800/-</td>
                              </tr>
                              <tr>
                                <td>10000</td>
                                <td>12500/-</td>
                                <td>13500/-</td>
                              </tr>
                              <tr>
                                <td>15000</td>
                                <td>17930/-</td>
                                <td>19375/-</td>
                              </tr>
                              <tr>
                                <td>20000</td>
                                <td>22400/-</td>
                                <td>24400/-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    <small className="text-muted d-block mt-2">
                      *Terms & Conditions Apply
                    </small>
                  </div>
                )}
              </div>

              {/* Image - Right */}
              <div className="col-md-6 mb-4 mb-md-0 d-flex order-1 order-md-2">
                <img
                  src={pamphlet}
                  alt="Pamphlet Design"
                  className="pamphlet-image img-fluid mx-auto align-self-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Services;
