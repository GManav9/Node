const express = require("express");
const port = 4545;

const db = require("./config/db");
const schema = require("./model/firstSchema");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
  
app.get("/", async (req, res) => {
  await schema.find({}).then((Student) => {
    res.render("index", { Student });
  });
  // let Student = await schema.find({});
  // res.render("index", { Student });
});

app.post("/addData", async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/");
  });
  // let data = await schema.create(req.body);
  // data && res.redirect("/");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("This port is Startde on " + port);
});
