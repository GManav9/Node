const express = require("express");

const port = 8989;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
let data = [{ id: 1, task: "All2222", priority: "high", status: "pending" }];

app.post("/AddData", (req, res) => {
  req.body.id = data.length + 1;
  data.push(req.body);
  res.redirect("/");
});

app.get("/DeleteData", (req, res) => {
  let Newdata = data.filter((item) => item.id != req.query.id);
  data = Newdata;
  res.redirect("/");
});

app.get("/EditData/:id", (req, res) => {
  let SingleData = data.find((item) => item.id == req.params.id);
  res.render("edit", { SingleData });
});

app.post("/UpdateData", (req, res) => {
  data.forEach((item) => {
    if (item.id == req.body.id) {
      item.task = req.body.task;
      item.priority = req.body.priority;
      item.status = req.body.status;
    } else {
      item;
      // console.log("error is giving");
    }
  });
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("The port is Started on : " + port);
});
