const categoryschema = require("../model/categoryschema");
let schema = require("../model/subcategoryschema");

module.exports.addsubcategory = async (req, res) => {
  await categoryschema.find({}).then((data) => {
    res.render("addsubcategory", { data });
  });
};

module.exports.addsubcategorys = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/subcategory/addsubcategory");
  });
};
module.exports.viewsubcategory = async (req, res) => {
  await schema
    .find({})
    .populate("categoryId")
    .then((data) => {
      res.render("viewsubcategory", { data });
    });
};
