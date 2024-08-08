const EmailVerifier = require('email-verifier');
const verifier = new EmailVerifier('your_email_verifier_api_key');

async function verifyEmail(email) {
  try {
    const result = await verifier.verify(email);
    console.log(result);
    if (result.smtpCheck) {
      console.log('Email is valid and deliverable.');
    } else {
      console.log('Email is not valid or deliverable.');
    }
  } catch (error) {
    console.error('Error verifying email:', error);
  }
}

const email = 'test@gmail.com';

if (validateEmailFormat(email)) {
  verifyEmail(email);
} else {
  console.log('Invalid email format.');
}

export {verifyEmail}