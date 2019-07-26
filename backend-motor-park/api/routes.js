const express = require("express");
const app = express();
const vehicles = require("../data/data.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  res.json(vehicles.filter(e => e.state === "ON").slice(0, 12));
});

app.get("/:id", function(req, res) {
  let id = req.params.id;
  res.json(vehicles.find(e => e.id == id && e.state === "ON"));
});

module.exports = app;
