const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const passportSt = require("../middleware/passport");

route.get("/", ctl.login);
route.post(
  "/login",
  passportSt.authenticate("local", { failureRedirect: "/" }),
  ctl.loginAdmin
);

route.get("/dashboard", passportSt.checkAuth, ctl.dashboard);
route.get("/addAdmin", passportSt.checkAuth, ctl.addAdmin);
route.post("/addAdmin", passportSt.checkAuth, ctl.addAdminData);
route.get("/viewAdmin", passportSt.checkAuth, ctl.viewAdmin);

route.get("/logout", passportSt.checkAuth, ctl.logout);

route.get("/deleteAdmin", passportSt.checkAuth, ctl.deleteAdmin);

route.get("/editAdmin", passportSt.checkAuth, ctl.editAdmin);

route.post("/updateAdmin", passportSt.checkAuth, ctl.updateAdmin);

route.get("/changePass", passportSt.checkAuth, ctl.changePass);
route.post("/changePass", passportSt.checkAuth, ctl.changePassword);

route.get("/ForgetPassword", ctl.ForgetPassword);
route.post("/ForgetPassword", ctl.lostpassword);
route.post("/verifypass", ctl.verifypassword);

module.exports = route;
