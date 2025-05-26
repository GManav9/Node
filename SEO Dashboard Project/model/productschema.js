const mongoose = require("mongoose");

const schema = mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  productprice: {
    type: String,
    required: true,
  },
  productimage: {
    type: String,
    required: true,
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategories",
    required: true,
  },
});

const productschema = mongoose.model("product", schema);

module.exports = productschema;
