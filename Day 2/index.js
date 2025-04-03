const express = require("express");
const port = 8788;

const app = express();

app.set("view engine", "ejs");

let students = [{ id: 1, name: "Manav", subject: "Node" }];

app.get("/", (req, res) => {
  res.render("index",{students});
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server is Started on Port : " + port);
});
