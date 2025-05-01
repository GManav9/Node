const { Schema } = require("mongoose");
const schema = require("../model/schema");

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  // res.render("addAdmin");
  await schema.create(req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.viewAdmin = async (req, res) => {
  // res.render("viewAdmin");
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.deleteAdmin = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  await schema.findByIdAndDelete(req.query.id).then(() => {
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
