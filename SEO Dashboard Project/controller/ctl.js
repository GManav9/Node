const { Schema } = require("mongoose");
const schema = require("../model/schema");

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    req.flash("success", "Admin Added Successfully");
    res.redirect("/viewAdmin");
  });
};

module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.login = (req, res) => {
  res.render("login");
};

module.exports.loginAdmin = async (req, res) => {
  console.log("Admin Logged In", req.user.email);
  req.flash("success", "Login SuccessFully");
  res.redirect("/dashboard");
};

module.exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.deleteAdmin = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  await schema.findByIdAndDelete(req.query.id).then(() => {
    req.flash("success", "Admin Deleted");
    res.redirect("/viewAdmin");
  });
};

module.exports.editAdmin = async (req, res) => {
  await schema.findById(req.query.id).then((data) => {
    res.render("editAdmin", { data });
  });
};

module.exports.updateAdmin = async (req, res) => {
  await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};
