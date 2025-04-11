const express = require("express");

const port = 2222;

const db = require("./config/db");
const app = express();
const schema = require("./model/fschema");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  let stu = await schema.find({});
  res.render("index", { stu });
});

app.post("/addData", async (req, res) => {
  let data = await schema.create(req.body);
  data && res.redirect("/");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("The Port is Started on " + port);
});
