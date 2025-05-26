const express = require("express");
const route = express.Router();
const ctl = require("../controller/productctl");
const passportSt = require("../middleware/passport");
const multer = require("../middleware/multer");

route.get("/addproduct", passportSt.checkAuth, ctl.addproduct);
route.post(
  "/addproduct",
  passportSt.checkAuth,
  multer.single("productimage"),
  ctl.addproducts
);

route.get("/viewproduct", passportSt.checkAuth, ctl.viewproduct);

module.exports = route;
