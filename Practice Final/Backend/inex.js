const express = require("express");
const port = 9999;

const app = express();




app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server Started on the port" + port);
});
