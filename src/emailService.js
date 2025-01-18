const nodemailer = require('nodemailer');
require('dotenv').config();

// SMTP configuration (replace with your credentials)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Sends an OTP email.
 * @param {string} email - Recipient's email address.
 * @param {string} otp - The OTP to send.
 */
const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: '"Your App Name" <your-email@example.com>',
    to: email,
    subject: "Your OTP Verification Code",
    html: `
      <h1>Email Verification</h1>
      <p>Your OTP code is:</p>
      <h2>${otp}</h2>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };
