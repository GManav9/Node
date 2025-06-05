const schema = require("../model/schema");

module.exports.addData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.json({ msg: "data added" });
  });
};

module.exports.viewData = async (req, res) => {
  await schema.find({}).then((data) => {
    res.json({ msg: "data added", record: data });
  });
};

module.exports.deleteData = async (req, res) => {
  // console.log(req.query);
  await schema.findByIdAndDelete(req.query.id).then(() => {
    res.json({ msg: "data deleted successfully" });
  });
};

module.exports.updateData = async (req, res) => {
  await schema.findByIdAndUpdate(req.query.id, req.body).then(() => {
    res.json({ msg: "data Update successfully" });
  });
};
