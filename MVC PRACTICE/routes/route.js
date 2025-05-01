const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.dashboard);
route.get("/addAdmin", ctl.addAdmin);
route.get("/viewAdmin", ctl.viewAdmin);
route.post("/addAdmin",ctl.addAdminData)

module.exports = route;
