const otpStore = new Map();
const OTP_EXPIRATION_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Generates a random OTP.
 * @returns {string} A 6-digit OTP.
 */
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Saves the OTP for a specific email.
 * @param {string} email - The user's email address.
 * @param {string} otp - The OTP to save.
 */
const saveOTP = (email, otp) => {
  otpStore.set(email, { otp, expiresAt: Date.now() + OTP_EXPIRATION_MS });
};

/**
 * Verifies an OTP for a specific email.
 * @param {string} email - The user's email address.
 * @param {string} otp - The OTP to verify.
 * @returns {boolean} Whether the OTP is valid.
 */
const verifyOTP = (email, otp) => {
  const record = otpStore.get(email);
  if (!record) return false;

  const { otp: storedOtp, expiresAt } = record;
  if (Date.now() > expiresAt) {
    otpStore.delete(email); // Clean up expired OTP
    return false;
  }

  const isValid = storedOtp === otp;
  if (isValid) otpStore.delete(email); // Clean up after successful verification
  return isValid;
};

module.exports = { generateOTP, saveOTP, verifyOTP };
