const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const fschema = mongoose.model("stu", schema);

module.exports = fschema;
