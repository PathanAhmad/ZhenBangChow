import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

export const sendOtpToPhone = async (phone) => {
  try {
    const verification = await client.verify.v2
      .services(serviceSid)
      .verifications.create({ to: phone, channel: 'sms' });
    return verification.sid;
  } catch (error) {
    throw new Error('Failed to send OTP');
  }
};

export const verifyPhoneOtp = async (phone, otp) => {
  try {
    const verificationCheck = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to: phone, code: otp });
    return verificationCheck.status === 'approved';
  } catch (error) {
    throw new Error('OTP verification failed');
  }
};
