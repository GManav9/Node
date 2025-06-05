const schema = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  let user = await schema.findOne({ email: req.body.email });
  if (user) {
    return res.status(200).json({ msg: "User already registered" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);

  await schema.create(req.body).then((data) => {
    return res
      .status(200)
      .json({ msg: "User successfully created !", user: data });
  });
};
