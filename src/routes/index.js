const express = require("express");
const routes = express.Router();
const { route } = require("express/lib/application");
const navbar = require("../models/nav");
const slider = require("../models/slider");
const contact = require("../models/contact");
const nav = require("../models/nav");

routes.get("/", async (req, res) => {
  try {
    const navbar = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
    const slides = await slider.find();
    res.render("home", {
      navbar: navbar,
      slides: slides,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});
routes.get("/services", async (req, res) => {
  const navbar = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
  console.log(navbar);
  res.render("services", {
    navbar: navbar,
  });
});
routes.get("/services-areas", async (req, res) => {
  const navbar = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
  console.log(navbar);
  res.render("service_areas", {
    navbar: navbar,
  });
});
routes.get("/contact_us", async (req, res) => {
  const navbar = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
  console.log(navbar);
  res.render("contact_us", {
    navbar: navbar,
  });
});
routes.post("/contact_us", async (req, res) => {
  const { name, email, number, message } = req.body;

  if (!name || !email || !number || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const contactInfo = new contact({ name, email, number, message });
    await contactInfo.save();

    res.status(201).json({ message: "Contact Information saved successfully" });
  } catch (error) {
    console.error("Error saving contact information:", error);
    res
      .status(500)
      .json({ message: "An error occurred while saving contact information" });
  }
});

routes.get("/services", async (req, res) => {
  const nav = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
  console.log(nav);
  res.render("services");
});
routes.get("/service_areas", async (req, res) => {
  const nav = await nav.findOne({ _id: "67824aa0512ead4ed19de20c" });
  console.log(nav);
  res.render("service_areas");
});
routes.get("/contact_us", async (req, res) => {
  res.render("contact_us");
});

module.exports = routes;
