import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ContactPage from "../pages/contact";
import Footer from "../components/Footer";
import About from "../pages/About";
import Work from "../pages/Work";
import Service from "../pages/services";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/footer" element={<Footer></Footer>}></Route>
      <Route path="/Work" element={<Work></Work>}></Route>
      <Route path="/services" element={<Service></Service>}></Route>
    </Routes>
  );
}

export default Mainroutes;
