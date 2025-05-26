// let schema = require("../model/categoryschema");
// let subcategoryschema = require("../model/subcategoryschema");
let productschema = require("../model/productschema");
let categoryschema = require("../model/categoryschema");
const subcategoryschema = require("../model/subcategoryschema");

module.exports.addproduct = async (req, res) => {
  await subcategoryschema.find({}).then((data) => {
    res.render("addproduct", { data });
  });
};

module.exports.addproducts = async (req, res) => {
  req.body.productimage = req.file.path;
  await productschema.create(req.body).then(() => {
    res.redirect("/product/addproduct");
  });
};

module.exports.viewproduct = async (req, res) => {
  await productschema
    .find({})
    .populate({
      path: "subcategoryId",
      populate: {
        path: "categoryId",
      },
    })
    .then((data) => {
      res.render("viewproduct", { data });
    });
  // await productschema.find({}).then((data) => {
  //   console.log(data.subcategoryId);
  // });
};
