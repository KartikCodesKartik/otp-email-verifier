const { sendOTPEmail } = require('./src/emailService');

(async () => {
  try {
    const testEmail = "call.sos143@gmail.com"; // Replace with a valid recipient email address
    const testOTP = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    console.log(`Sending OTP: ${testOTP} to ${testEmail}`);
    await sendOTPEmail(testEmail, testOTP);
    console.log("OTP sent successfully!");
  } catch (error) {
    console.error("Error sending OTP:", error.message);
  }
})();
