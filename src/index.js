const { sendOTPEmail } = require('./emailService');
const { generateOTP, saveOTP, verifyOTP } = require('./otpManager');

/**
 * Sends an OTP email to the specified address.
 * @param {string} email - Recipient's email address.
 * @returns {Promise<void>}
 */
const sendOTP = async (email) => {
  const otp = generateOTP();
  saveOTP(email, otp);
  await sendOTPEmail(email, otp);
};

/**
 * Verifies an OTP for the specified email.
 * @param {string} email - Recipient's email address.
 * @param {string} otp - OTP to verify.
 * @returns {boolean} Whether the OTP is valid.
 */
const validateOTP = (email, otp) => {
  return verifyOTP(email, otp);
};

module.exports = { sendOTP, validateOTP };
