const catSchema = require("../model/categorySchema");
let schema = require("../model/subcategoryschema");

module.exports.addsubCategory = async (req, res) => {
  await catSchema.find({}).then((data) => {
    res.render("addsubCategory", { data });
  });
};

module.exports.addsubCategorys = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/subcategory/addsubCategory");
  });
};

module.exports.viewsubCategory = async (req, res) => {
  await schema
    .find({})
    .populate("categoryId")
    .then((data) => {
      res.render("viewsubcategory", { data });
    });
};
