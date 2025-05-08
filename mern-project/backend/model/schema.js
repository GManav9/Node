const mongoose = require("mongoose");

const schema = mongoose.Schema({
  bookimage: {
    type: String,
    required: true,
  },
  booktitle: {
    type: String,
    required: true,
  },
  bookauthor: {
    type: String,
    required: true,
  },
  bookgenre: {
    type: String,
    required: true,
  },
  bookprice: {
    type: String,
    required: true,
  },
  bookdescription: {
    type: String,
    required: true,
  },
});

const fschema = mongoose.model("BookStore", schema);

module.exports = fschema;
