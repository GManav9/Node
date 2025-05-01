const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.login);
route.post("/login", ctl.loginAdmin);
route.get("/logout", ctl.logout);
route.get("/dashboard", ctl.dashboard);
route.get("/addAdmin", ctl.addAdmin);
route.get("/viewAdmin", ctl.viewAdmin);
route.post("/addAdmin", ctl.addAdminData);
route.get("/deleteAdmin", ctl.deleteAdmin);
route.get("/editAdmin", ctl.editAdmin);
route.post("/updateAdmin", ctl.updateAdmin);

module.exports = route;
