const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

router.get("/restaurants", (req, res) => {
  let order = req.query.order;
  let nextOrder = "desc";
  const filePath = path.join(__dirname, "..", "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  }
  storedRestaurants.sort((a, b) => {
    if (order === "asc" && a.name > b.name) {
      return 1;
    } else if (order === "desc" && b.name > a.name) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

router.get("/confirm", (req, res) => {
  res.render("confirm");
});

router.get("/recommend", (req, res) => {
  res.render("recommend");
});

router.post("/recommend", (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  res.redirect("/confirm");
});

router.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    } else {
      return res.status(404).res.render("404");
    }
  }
});

module.exports = router;
