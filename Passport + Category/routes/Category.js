const express = require("express");
const route = express.Router();
const ctl = require("../controller/categoryctl");
const passportSt = require("../middleware/passport");
const multer = require("../middleware/multer");

route.get("/addCategory", passportSt.checkAuth, ctl.addCategory);
route.post("/addCategory", passportSt.checkAuth, multer, ctl.addCategorys);

route.get("/viewCategory", passportSt.checkAuth, ctl.viewCategory);

module.exports = route;
