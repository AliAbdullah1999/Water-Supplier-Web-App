const mongoose = require("mongoose");
const Nav = mongoose.Schema({
  brandName: String,
  brandIconUrl: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});
module.exports = mongoose.model("navbar", Nav);
