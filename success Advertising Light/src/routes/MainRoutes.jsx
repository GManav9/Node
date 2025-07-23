import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ContactPage from "../pages/contact";
import Footer from "../components/Footer";
import Services from "../pages/Services";
import About from "../pages/About";
import Work from "../pages/work";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="/footer" element={<Footer></Footer>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/work" element={<Work></Work>}></Route>
    </Routes>
  );
}

export default Mainroutes;
