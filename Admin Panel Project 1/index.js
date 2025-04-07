const express = require("express");
const port = 9999;
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/chart-apex", (req, res) => {
  res.render("chart-apex");
});

app.get("/layout-vertical", (req, res) => {
  res.render("layout-vertical");
});

app.get("/layout-horizontal", (req, res) => {
  res.render("layout-horizontal");
});

app.get("/auth-signup", (req, res) => {
  res.render("auth-signup");
});

app.get("/auth-signin", (req, res) => {
  res.render("auth-signin");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server Started on this port + ");
});
