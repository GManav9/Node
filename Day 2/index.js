const express = require("express");
const port = 5555;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
//   res.end();
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server Startde on Port :" + port);
});
