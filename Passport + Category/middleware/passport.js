const passport = require("passport");

const localSt = require("passport-local").Strategy;

// const schema = require("../model/schema");
const schema = require("../model/Schema");

passport.use(
  "local",
  new localSt({ usernameField: "email" }, async (email, password, done) => {
    let admin = await schema.findOne({ email: email });
    if (admin) {
      if (admin.password == password) {
        return done(null, admin);
      } else {
        return done(null, false);
      }
    } else {
      return done(null, false);
    }
  })
);

passport.serializeUser((admin, done) => {
  return done(null, admin.id);
});

passport.deserializeUser(async (adminId, done) => {
  let admin = await schema.findById(adminId);
  if (admin) {
    return done(null, admin);
  } else {
    return done(null, false);
  }
});

passport.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.admin = req.user;
    // locals is a object to store
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = passport;
