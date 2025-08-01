import React, { useState, useEffect } from "react";

import "./Work.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import workHeroImage from "../assets/workHeroImage.jpg"; // ✅ Use your local image
import { Lightbulb, Brush, Camera } from "lucide-react";
import { FaHandshake, FaRocket, FaRegLightbulb } from "react-icons/fa";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* ---------- WHAT WE DO SECTION ---------- */}
      <section className="what-we-do-section">
        <div className="container text-center">
          <div className="what-we-do-header mb-5">
            <h2>What We Do</h2>
            <p>
              We craft compelling brand experiences—from strategy to execution.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-card shadow-sm">
                <Lightbulb size={48} color="#ff9800" className="mb-3" />
                <h3>Brand Strategy</h3>
                <p>Position your brand with clarity and purpose.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-card shadow-sm">
                <Brush size={48} color="#3f51b5" className="mb-3" />
                <h3>Creative Design</h3>
                <p>Visually stunning assets that elevate your message.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-card shadow-sm">
                <Camera size={48} color="#e91e63" className="mb-3" />
                <h3>Production</h3>
                <p>We turn ideas into impactful reality—fast and flawlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY WORK WITH US SECTION ---------- */}
      <section className="why-work-section">
        <div className="container text-center">
          <h2>Why Work With Us</h2>
          <p className="mb-5">
            We’re not just another agency — we’re your partners in creative
            success.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-why-card">
                <FaHandshake className="why-icon mb-3" />
                <h3>Collaborative Approach</h3>
                <p>
                  We work closely with clients to craft tailored solutions that
                  align with your vision.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-why-card">
                <FaRocket className="why-icon mb-3" />
                <h3>Result-Oriented</h3>
                <p>
                  We focus on results and ensure every campaign delivers value
                  and visibility.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="custom-why-card">
                <FaRegLightbulb className="why-icon mb-3" />
                <h3>Creative Thinking</h3>
                <p>
                  Our team thrives on creative strategy and out-of-the-box
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Collaborate CTA Section */}
      <section className="cta-collab-section">
        <h2>Let’s Collaborate</h2>
        <p>
          Ready to create something impactful? Let’s build your next big
          campaign.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>

      <Footer />
    </>
  );
};

export default Work;
