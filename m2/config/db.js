const mongooose = require("mongoose");

mongooose.connect("mongodb://127.0.0.1/No");

const db = mongooose.connection;

db.once("open", (err) => {
  err ? console.log(err) : console.log("DataBase Connected");
});

module.exports = db;
