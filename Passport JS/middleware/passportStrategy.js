const passport = require("passport");
const localSt = require("passport-local").Strategy;

const schma = require("../model/schema");

passport.use("local", new localSt())(
  { username: "email" },
  async (email, password, done) => {
    let admin = await schma.findOne({ email: email });
    if (admin) {
      if ((admin.password = password)) {
        return done(null, admin);
      } else {
        return done(null, false);
      }
    } else {
      return done(null, false);
    }
  }
);

passport.serializeUser((admin, done) => {
  return done(null, admin, id);
});

passport.deserializeUser(async (adminId, done) => {
  let admin = await schma.findById(adminId);
  if (admin) {
    return done(null, admin);
  } else {
    return done(null, false);
  }
});

module.exports = passport;
