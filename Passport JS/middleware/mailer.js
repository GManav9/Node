const { text } = require("express");
const nodemailer = require("nodemailer");

const trasnport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gangvanimanav@gmail.com",
    pass: "ycxpybxcojxlxavt",
  },
});

module.exports.sendOTP = (to, otp) => {
  let mailoptions = {
    to: to,
    from: "gangvanimanav@gmail.com",
    subject: "password RESET OTP",
    text: `your password reset otp is ${otp}`,
  };
  trasnport.sendMail(mailoptions);
};
