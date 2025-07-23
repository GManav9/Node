import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ContactPage from "../pages/contact";
import Footer from "../components/Footer";
import Services from "../pages/Services";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="/footer" element={<Footer></Footer>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
    </Routes>
  );
}

export default Mainroutes;
