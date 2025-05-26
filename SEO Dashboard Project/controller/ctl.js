const { Schema } = require("mongoose");
const schema = require("../model/schema");
const mailer = require("../middleware/mailer");

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    req.flash("success", "Admin Added Successfully");
    res.redirect("/viewAdmin");
  });
};

module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.login = (req, res) => {
  res.render("login");
};

module.exports.loginAdmin = async (req, res) => {
  console.log("Admin Logged In", req.user.email);
  req.flash("success", "Login SuccessFully");
  res.redirect("/dashboard");
};

module.exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.deleteAdmin = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  await schema.findByIdAndDelete(req.query.id).then(() => {
    req.flash("success", "Admin Deleted");
    res.redirect("/viewAdmin");
  });
};

module.exports.editAdmin = async (req, res) => {
  await schema.findById(req.query.id).then((data) => {
    res.render("editAdmin", { data });
  });
};

module.exports.updateAdmin = async (req, res) => {
  await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.changePass = (req, res) => {
  res.render("changePass");
};

module.exports.changePassword = async (req, res) => {
  let admin = req.user;

  if (admin.password == req.body.OldPassword) {
    if (req.body.OldPassword != req.body.NewPassword) {
      if (req.body.NewPassword == req.body.ConfirmPassword) {
        await schema
          .findByIdAndUpdate(admin.id, { password: req.body.NewPassword })
          .then(() => {
            res.redirect("/logout");
          });
      } else {
        res.redirect("/changePass");
      }
    } else {
      res.redirect("/changePass");
    }
  } else {
    res.redirect("/changePass");
  }
};

module.exports.ForgetPassword = (req, res) => {
  res.render("ForgetPassword");
};

module.exports.lostpassword = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });

  if (!admin) {
    return res.redirect("/");
  }

  let otp = Math.floor(Math.random() * 1000 + 9000);

  mailer.sendOTP(req.body.email, otp);
  req.session.otp = otp;
  req.session.adminData = admin;
  res.render("verifypass");
};

module.exports.verifypassword = async (req, res) => {
  let otp = req.session.otp;
  let admin = req.session.adminData;

  if (otp == req.body.otp) {
    if (req.body.newPass == req.body.confirmPass) {
      await schema
        .findByIdAndUpdate(admin._id, { password: req.body.newPass })
        .then(() => {
          res.redirect("/");
        });
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
};

// module.exports.verifypassword = async (req, res) => {
//   let otp = req.session.otp;
//   let admin = req.session.adminData;

//   if (otp == req.body.otp) {
//     if (req.body.newPass == req.body.confirmPass) {
//       await schema
//         .findByIdAndUpdate(admin._id, { password: req.body.newPass })
//         .then(() => {
//           res.redirect("/");
//         });
//     } else {
//       res.redirect("/");
//     }
//   } else {
//     res.redirect("/");
//   }
// };
