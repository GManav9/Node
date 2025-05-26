const express = require("express");
const route = express.Router();
const ctl = require("../controller/subcategoryctl");
const passportSt = require("../middleware/passport");

route.get("/addsubcategory", passportSt.checkAuth, ctl.addsubcategory);
route.post("/addsubcategory", passportSt.checkAuth, ctl.addsubcategorys);

route.get("/viewsubcategory", passportSt.checkAuth, ctl.viewsubcategory);

module.exports = route;
