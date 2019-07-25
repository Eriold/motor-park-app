const express = require("express");
const app = express();
const vehicles = require("../data/data.json");

app.get("/", function(req, res) {
  res.json(vehicles.filter(e => e.state === "ON").slice(0, 12));
});

app.get("/:id", function(req, res) {
  let id = req.params.id;
  res.json(vehicles.find(e => e.id == id && e.state === "ON"));
});

module.exports = app;
