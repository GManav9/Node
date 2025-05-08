const express = require("express");
const path = require("path");
const port = 5590;
const session = require("express-session");
const passport = require("passport");

const app = express();
const db = require("./config/db");

const connectFlash = require("connect-flash");
const flash = require("./middleware/flash");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "sessionLocal", // session name
    secret: "rnw", // third party user can access session with secret key
    resave: true, // when you change route then again save session for 10 minutes
    saveUninitialized: false, // does not save before create a session
    cookie: { maxAge: 100 * 100 * 60 }, // for 10 minutes
  })
);

app.use(passport.session());
app.use(passport.initialize());

app.use(connectFlash());
app.use(flash.setFlash);

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("The Port is Started On  " + port);
});
