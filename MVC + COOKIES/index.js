const express = require("express");
const path = require("path");
const port = 9999;
const cookie = require("cookie-parser");

const app = express();
const db = require("./config/db");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server is started " + port);
});
