let schema = require("../model/categorySchema");
let subcategoryschema = require("../model/subcategoryschema");
let productschema = require("../model/productschema");

module.exports.addproduct = async (req, res) => {
  await subcategoryschema.find({}).then((data) => {
    res.render("addproduct", { data });
  });
};

module.exports.addproducts = async (req, res) => {  
  req.body.categoryimage = req.file.path;
  await productschema.create(req.body).then(() => {
    res.redirect("/product/addproduct");
  });
};

module.exports.viewproduct = async (req, res) => {
  //   await schema.find({}).then((data) => {
  //     res.render("viewCategory", { data });
  //   });
};
