import React, { useEffect } from "react";

import "./services.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import digitalMarketing from "../assets/digital-marketing.jpg";
import creativeServices from "../assets/creative-services.jpg";
import events from "../assets/events.jpg";
import exhibitions from "../assets/exhibitions.jpg";
import retailBranding from "../assets/retail-branding.jpg";
import mice from "../assets/mice.jpg";
import corporateGifting from "../assets/corporate-gifting.jpg";
import gtmStrategy from "../assets/gtm-strategy.jpg";

const services = [
  {
    title: "Digital & Content Marketing",
    description:
      "From SEO and social media to compelling storytelling and performance-driven campaigns, we craft strategies that elevate your digital presence and drive measurable results.",
    image: digitalMarketing,
  },
  {
    title: "Creative Services",
    description:
      "Our creative team brings your brand to life through stunning visuals, branding, videos, and interactive content — blending imagination with business purpose.",
    image: creativeServices,
  },
  {
    title: "Events & Execution",
    description:
      "We flawlessly execute corporate, brand, and experiential events that leave lasting impressions. From planning to execution, we manage every detail.",
    image: events,
  },
  {
    title: "Exhibitions",
    description:
      "We design and manage immersive exhibition booths that grab attention, drive footfall, and deliver brand impact — locally and internationally.",
    image: exhibitions,
  },
  {
    title: "Retail Branding & Activations",
    description:
      "Engage your audience at the ground level with creative retail activations and innovative in-store branding that drives consumer interaction.",
    image: retailBranding,
  },
  {
    title: "MICE",
    description:
      "We specialize in planning and executing Meetings, Incentives, Conferences, and Exhibitions with excellence — ensuring seamless logistics and memorable experiences.",
    image: mice,
  },
  {
    title: "Corporate Gifting",
    description:
      "Custom curated corporate gifts and welcome kits that reflect your brand’s personality — perfect for onboarding, festivals, or relationship-building.",
    image: corporateGifting,
  },
  {
    title: "Go to Market Strategies",
    description:
      "We help businesses launch and scale with solid GTM strategies — including positioning, messaging, targeting, and channel execution for maximum impact.",
    image: gtmStrategy,
  },
];

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="service-page">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-section section-${index + 1} ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Service;
