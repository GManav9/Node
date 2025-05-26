const mongoose = require("mongoose");

const schema = mongoose.Schema({
  subcategoryname: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
});

const subcatSchema = mongoose.model("subCategories", schema);

module.exports = subcatSchema;
