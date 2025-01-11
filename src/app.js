const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const router = require("./routes/index");
const nav = require("./models/nav");
const slider = require("./models/slider");
const contact = require("./models/contact"); // Added contact model

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/static", express.static("public"));

// Setting up view engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/components");

// Database connection

mongoose.connect('mongodb+srv://aliabdullahpk1:aliabdullah@cluster0.kav6m.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Increase socket timeout
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));


// Passing navbar data
// nav.create({
//   brandName: "Riyadh Water Supply",
//   brandIconUrl: "/static/images/logo.jpeg",
//   links: [
//     { label: "Home", url: "/" },
//     { label: "Services", url: "/services" },
//     { label: "Service Areas", url: "/services-areas" },
//     { label: "Contact Us", url: "/contact_us" },
//   ],
// });

// Passing slider data
// slider.create([
//   { imageUrl: "/static/images/truck1.jpeg" },
//   { imageUrl: "/static/images/truck2.jpeg" },
//   // { imageUrl: "/static/images/truck3.jpeg" },
//   { imageUrl: "/static/images/truck4.jpeg" },
//   { imageUrl: "/static/images/truck5.jpeg" },
// ]);

// Router integration
app.use("", router);

// Start the server
const PORT = process.env.PORT || 1500;
app.listen(PORT || 1500, () => {
  console.log(`Server started on port ${PORT}...`);
});
