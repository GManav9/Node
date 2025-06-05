const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
});

const Firstschema = mongoose.model("Mern", schema);

module.exports = Firstschema;
