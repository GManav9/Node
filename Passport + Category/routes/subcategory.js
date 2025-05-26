const express = require("express");
const route = express.Router();
const ctl = require("../controller/subcategory");
const passportSt = require("../middleware/passport");

route.get("/addsubCategory", passportSt.checkAuth, ctl.addsubCategory);
route.post("/addsubCategory", passportSt.checkAuth, ctl.addsubCategorys);

route.get("/viewsubCategory", passportSt.checkAuth, ctl.viewsubCategory);

module.exports = route;
