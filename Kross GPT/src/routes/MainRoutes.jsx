import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default MainRoutes;
