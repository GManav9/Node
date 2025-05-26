const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gangvanimanav@gmail.com",
    pass: "cwyjzfmykvydsome",
  },
});

module.exports.sendOTP = (to, otp) => {
  let mailoption = {
    to: to,
    from: "gangvanimanav@gmail.com",
    subject: "PASSWORD RESET OTP",
    text: `your password reset OTP is ${otp}`,
  };
  transport.sendMail(mailoption);
};
