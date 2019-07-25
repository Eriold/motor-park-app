const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes");
const PORT = 4000;

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, function() {
  console.log("Server runing Ok! on port: " + PORT);
});
