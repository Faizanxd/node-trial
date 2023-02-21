const express = require("express");
const app = express();
const path = require("path");

const restaurantsRoutes = require("./routes/restaurants");
const defaultRoutes = require("./routes/default");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"), express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantsRoutes);

app.use((req, res) => {
  res.status(404).res.render("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.render("500");
});

app.listen(3000);
