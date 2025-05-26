const mongoose = require("mongoose");

const schema = mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
  categoryimage: {
    type: String,
    required: true,
  },
});

const categoryschema = mongoose.model("Categories", schema);

module.exports = categoryschema;
