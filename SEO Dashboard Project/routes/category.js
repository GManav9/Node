const express = require("express");
const route = express.Router();
const ctl = require("../controller/categoryctl");
const passportSt = require("../middleware/passport");
const multer = require("../middleware/multer");

route.get("/addcategory", passportSt.checkAuth, ctl.addcategory);
route.post(
  "/addcategory",
  passportSt.checkAuth,
  multer.single("categoryimage"),
  ctl.addcategorys
);

route.get("/viewcategory", passportSt.checkAuth, ctl.viewcategory);

module.exports = route;
