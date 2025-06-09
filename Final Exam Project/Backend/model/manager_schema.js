const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the image (optional)
  },
});

module.exports = mongoose.model("Manager", managerSchema);
