const schema = require("../model/schema");

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};
