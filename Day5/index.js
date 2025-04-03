const express = require("express");
const port = 8887;

const app = express();

app.set("view engine", "ejs");

let students = [{ id: 1, name: "Manav", subject: "node" }];

app.get("/", (req, res) => {
  res.render("index",{students});
});
// app.get("/", (req, res) => {
//   res.write("<h1>Hello</h1>");
//   res.end();
// });

app.listen(port, (err) => {
  err ? console.log(err) : console.log("This port is run at " + port);
});
