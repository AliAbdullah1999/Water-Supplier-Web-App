const mongoose = require("mongoose");
const Slider = mongoose.Schema({
  imageUrl: String,
});
module.exports = mongoose.model("slider", Slider);
