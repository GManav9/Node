import React from "react";
import "./services.css"; // tu already use kar raha hai
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "Flex Banner",
    description:
      "Flex banners are one of the most affordable and effective ways to promote your brand, events, or offers in high-visibility areas. We specialize in high-resolution flex printing using weatherproof materials that withstand sun, rain, and wind. Our banners are available in a variety of sizes and finishes to suit any business need—be it storefront display, event backdrop, or promotional signage. With vibrant colors and strong durability, they serve as excellent marketing tools for both short-term and long-term use.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Eco Printing",
    description:
      "Eco printing is for businesses who care about the environment. We use recycled paper, soy-based inks, and energy-efficient machines to deliver top-quality prints. You can go green without sacrificing clarity, color, or durability. Ideal for eco-conscious brands and corporate communication. It’s our mission to reduce environmental impact while maintaining professional standards in every print.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Poll Board",
    description:
      "We print sturdy, weatherproof poll boards ideal for elections, campaigns, or public notices. These boards are made with durable material and come with high-contrast visuals to ensure maximum visibility and engagement in any public setting. Our poll boards are customized with your candidate details or messaging and are built to withstand varying weather conditions.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "ACP Board",
    description:
      "ACP boards provide a premium, modern, and long-lasting signage option for offices and commercial places. We offer precision-cut, UV-protected ACP boards that give your brand a polished and professional presence. Whether it’s for your reception area, office frontage, or outdoor branding, our ACP boards offer style and strength in one package.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Brochure",
    description:
      "We create attractive brochures that tell your story. Whether it’s for a product launch or business profile, our brochures come in multiple folds and sizes with vibrant colors, crisp text, and a professional finish. With design that speaks and print that lasts, our brochures effectively showcase your business goals and offerings.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Pamphlet",
    description:
      "Pamphlets are ideal for mass marketing. We design and print eye-catching pamphlets with compelling messaging and high-quality print to help you reach a large audience at a low cost. Perfect for distributing at events, door-to-door marketing, or inserts in newspapers to maximize your reach and brand awareness.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "NewsPaper Ads",
    description:
      "We create attention-grabbing newspaper ads that are tailored for classified sections, half-page, or full-page prints. Our creative team ensures strong headlines and visuals that connect with readers instantly. From designing to placing your ad in the right newspaper, we handle the entire process end-to-end.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Hoarding",
    description:
      "Hoardings are high-impact outdoor advertisements. We design, print, and install large-scale hoardings at prime locations to maximize your brand visibility with bold designs and weatherproof materials. Whether static or digital, our hoardings command attention and leave a lasting impression.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Canopy",
    description:
      "Promote your brand on the move with our portable canopies. Ideal for events, exhibitions, and roadside promotions, our canopies are printed with your branding, easy to set up, and built to last. They offer a powerful mix of visibility, shade, and branding presence that grabs attention wherever you go.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Corporate Branding",
    description:
      "Corporate branding covers everything from logo to office design. We help build brand identity through professional signage, stationery, packaging, and marketing material to give your business a unified and impactful look. Strong corporate branding builds trust, increases brand recall, and sets you apart from the competition.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Auto Branding (Rickshaw)",
    description:
      "We turn autos into mobile billboards with vibrant full-body branding. These roaming advertisements grab attention across city streets and neighborhoods—perfect for hyper-local promotions. Our wraps are durable, weather-resistant, and custom-designed to ensure consistent branding across all your transport vehicles.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
  {
    title: "Indoor / outdoor Advertisement",
    description:
      "From glow boards to large-format displays, we provide complete indoor and outdoor advertising solutions. Our designs ensure high visibility and brand recall—whether inside a mall or on the streets. We blend creativity and durability to produce ads that deliver results in every environment.",
    image:
      "https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg",
  },
];

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
