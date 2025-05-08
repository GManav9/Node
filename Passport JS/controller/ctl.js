const Schema = require("../model/Schema");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session:", err);
      return res.redirect("/dashboard");
    }
    res.redirect("/"); // or redirect to login page
  });
};

  
module.exports.loginAdmin = async (req, res) => {
  res.redirect("/dashboard");
};

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  req.body.profile = req.file.path;
  // res.render("addAdmin");
  await Schema.create(req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.viewAdmin = async (req, res) => {
  // res.render("viewAdmin");
  await Schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.deleteAdmin = async (req, res) => {
  let singleData = await Schema.findById(req.query.id);
  await Schema.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.editAdmin = async (req, res) => {
  await Schema.findById(req.query.id).then((data) => {
    res.render("editAdmin", { data });
  });
};

module.exports.updateAdmin = async (req, res) => {
  await Schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.profile = (req, res) => {
  res.render("profile");
};
