import React from "react";
import "./work.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import workHeroImage from "../assets/workHeroImage.png"; // ✅ Use your local image
import { Lightbulb, Brush, Camera } from "lucide-react";

const Work = () => {
  return (
    <>
      <Navbar />
      <section className="work-hero-final">
        <div className="work-content-left">
          <h1>Designing Moments that Matter</h1>
          <p>
            From experiential booths to captivating campaigns, we bring bold
            ideas to life. Our team transforms concepts into high-impact
            realities that engage, inspire, and deliver results.
          </p>
          <button className="work-cta-btn">Explore Our Work</button>
        </div>

        <div className="work-image-right">
          <img src={workHeroImage} alt="Creative Showcase" />
        </div>
      </section>
      {/* what we do section */}
      <div className="service-cards">
        <div className="service-card">
          <Lightbulb size={48} color="#fff" style={{ marginBottom: "16px" }} />
          <h3>Brand Strategy</h3>
          <p>Position your brand with clarity and purpose.</p>
        </div>
        <div className="service-card">
          <Brush size={48} color="#fff" style={{ marginBottom: "16px" }} />
          <h3>Creative Design</h3>
          <p>Visually stunning assets that elevate your message.</p>
        </div>
        <div className="service-card">
          <Camera size={48} color="#fff" style={{ marginBottom: "16px" }} />
          <h3>Production</h3>
          <p>We turn ideas into impactful reality—fast and flawlessly.</p>
        </div>
      </div>
      {/* what we do section */}
      <Footer />
    </>
  );
};

export default Work;
