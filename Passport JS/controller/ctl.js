const Schema = require("../model/Schema");

module.exports.login = (req, res) => {
  res.render("login");
};

module.exports.loginAdmin = async (req, res) => {
  let admin = await Schema.findOne({ email: req.body.email });
  if (admin) {
    if (req.body.password == admin.password) {
      res.cookie("admin", admin);
      res.redirect("dashboard");
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
};

module.exports.dashboard = (req, res) => {
  if (req.cookies.admin) {
    res.render("dashboard");
  } else {
    res.redirect("/");
  }
};

module.exports.addAdmin = (req, res) => {
  if (req.cookies.admin) {
    res.render("addAdmin");
  } else {
    res.redirect("/");
  }
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

module.exports.logout = (req, res) => {
  res.clearCookie("admin");
  res.redirect("/");
};
