const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"), express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/restaurants", (req, res) => {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});

app.get("/recommend", (req, res) => {
  res.render("recommend");
});

app.post("/recommend", (req, res) => {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  res.redirect("/confirm");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000);
