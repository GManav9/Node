let schema = require("../model/categoryschema");

module.exports.addcategory = (req, res) => {
  res.render("addcategory");
};

module.exports.addcategorys = async (req, res) => {
  req.body.categoryimage = req.file.path;
  await schema.create(req.body).then(() => {
    res.redirect("/category/addcategory");
  });
};
module.exports.viewcategory = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewcategory", { data });
  });
};
