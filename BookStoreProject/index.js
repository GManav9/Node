const express = require("express");

const port = 3333;

const app = express();

const db = require("./config/db");
const fschema = require("./model/schema");
const { Schema } = require("mongoose");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/AddNew", (req, res) => {
  res.render("AddData");
});

app.get("/", async (req, res) => {
  await fschema.find({}).then((book) => {
    res.render("index", { book });
    // console.log(book);
  });
});

app.post("/AddData", async (req, res) => {
  await fschema.create(req.body).then(() => {
    res.redirect("/");
    // console.log(req.body);
  });
});

app.get("/DeleteData", async (req, res) => {
  await fschema.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/");
    // console.log(fschema);
  });
});

app.get("/EditData", async (req, res) => {
  await fschema.findById(req.query.id).then((data) => {
    res.render("EditData", { data });
  });
});

app.post("/UpdateData", async (req, res) => {
  await fschema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/");
  });
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("The Port Is Started On " + port);
});
