const mongoose = require("mongoose");

contact = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contact", contact);
