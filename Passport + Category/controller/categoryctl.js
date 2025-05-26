let schema = require("../model/categorySchema");

module.exports.addCategory = (req, res) => {
  res.render("addCategory");
};

module.exports.addCategorys = async (req, res) => {
  req.body.categoryimage = req.file.path;
  await schema.create(req.body).then(() => {
    res.redirect("/category/addCategory");
  });
};

module.exports.viewCategory = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewCategory", { data });
  });
};
