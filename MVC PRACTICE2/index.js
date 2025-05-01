const express = require("express");
const port = 5555;
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("This port is started on :" + port);
});
