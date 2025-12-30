import React, { useEffect } from "react";
import "./Services.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🔹 Apni 8 service images yaha import karo
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";

const serviceImages = [
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="services-banners">
        {serviceImages.map((img, index) => (
          <section className="service-banner" key={index}>
            <img src={img} alt={`service-${index}`} />
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Services;
