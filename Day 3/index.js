const express = require("express");
const port = 8889;

const app = express();

app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server Started At this port : " + port);
});
