const mongoose = require("mongoose");

const schema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const FirstSchema = mongoose.model("AdminData", schema);

module.exports = FirstSchema;
