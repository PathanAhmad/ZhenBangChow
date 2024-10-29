import asyncHandler from '../middleware/asyncHandler.js';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
import { sendOtpToPhone, verifyPhoneOtp } from '../utils/otpService.js';

// Temporary storage for registration data awaiting OTP verification
const pendingRegistrations = new Map();

// Auth user with Email & Password
const authUserWithEmail = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.json({ _id: user._id, email: user.email });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error in authUserWithEmail function' });
  }
});

// Auth user with Phone & OTP
const authUserWithPhoneOtp = asyncHandler(async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const user = await User.findOne({ phone });

    if (user && await verifyPhoneOtp(phone, otp)) {
      generateToken(res, user._id);
      res.json({ _id: user._id, phone: user.phone });
    } else {
      res.status(401).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error in authUserWithPhoneOtp function' });
  }
});

// Step 1: Initiate registration by sending OTP and storing data temporarily
const initiateRegistration = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const emailExists = await User.findOne({ email });
    const phoneExists = await User.findOne({ phone });

    if (emailExists || phoneExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    await sendOtpToPhone(phone);
    pendingRegistrations.set(phone, { name, email, password });
    res.status(200).json({ message: 'OTP sent to phone. Verify to complete registration.' });
  } catch (error) {
    res.status(500).json({ message: 'Error in initiateRegistration function' });
  }
});

// Step 2: Complete registration upon OTP verification
const registerUserWithOtp = asyncHandler(async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const registrationData = pendingRegistrations.get(phone);

    if (!registrationData) {
      res.status(404).json({ message: 'No registration data found. Start registration again.' });
      return;
    }

    const isOtpValid = await verifyPhoneOtp(phone, otp);
    if (!isOtpValid) {
      res.status(401).json({ message: 'Invalid OTP' });
      return;
    }

    const { name, email, password } = registrationData;
    const user = await User.create({ name, email, phone, password });
    pendingRegistrations.delete(phone);

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({ _id: user._id, email: user.email, phone: user.phone });
    } else {
      res.status(400).json({ message: 'Failed to register user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error in registerUserWithOtp function' });
  }
});

// Request OTP for existing user phone
const requestPhoneOtp = asyncHandler(async (req, res) => {
  try {
    const { phone } = req.body;
    const user = await User.findOne({ phone });

    if (user) {
      await sendOtpToPhone(phone);
      res.status(200).json({ message: 'OTP sent to phone' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error in requestPhoneOtp function' });
  }
});

export {
  authUserWithEmail,
  authUserWithPhoneOtp,
  initiateRegistration,
  registerUserWithOtp,
  requestPhoneOtp,
};
