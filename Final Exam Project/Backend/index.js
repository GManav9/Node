const express = require("express");
const port = 3000;
const db = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routes/route"));
app.use("/managers", require("./routes/manager_routes"));

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`Server started on port: ${port}`);
});
