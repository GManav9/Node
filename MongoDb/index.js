const express = require("express");
const port = 4545;
const db = require("./config/db");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("This port is Startde on " + port);
});
