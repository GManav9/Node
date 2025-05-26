const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const passportSt = require("../middleware/passport");

route.get("/", ctl.login);
// route.post("/logout", ctl.logout);
route.post(
  "/login",
  passportSt.authenticate("local", { failureRedirect: "/" }),
  ctl.loginAdmin
);
route.get("/logout", ctl.logout);
route.get("/dashboard", passportSt.checkAuth, ctl.dashboard);
route.get("/addAdmin", passportSt.checkAuth, ctl.addAdmin);
route.get("/viewAdmin", passportSt.checkAuth, ctl.viewAdmin);
route.post("/addAdmin", passportSt.checkAuth, ctl.addAdminData);
route.get("/deleteAdmin", passportSt.checkAuth, ctl.deleteAdmin);
route.get("/editAdmin", passportSt.checkAuth, ctl.editAdmin);
route.post("/updateAdmin", passportSt.checkAuth, ctl.updateAdmin);

route.get("/profile", passportSt.checkAuth, ctl.profile);

route.post("/lostpass", ctl.lostpass);

module.exports = route;
