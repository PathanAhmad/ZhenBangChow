import express from 'express';
import {
  authUserWithEmail,
  authUserWithPhoneOtp,
  initiateRegistration,
  registerUserWithOtp,
  requestPhoneOtp,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register/initiate', initiateRegistration); // Step 1: Initiate registration and send OTP
router.post('/register/complete', registerUserWithOtp);   // Step 2: Complete registration after OTP verification
router.post('/login', authUserWithEmail);                 // Login with email
router.post('/login/phone', authUserWithPhoneOtp);        // Login with phone OTP
router.post('/request-otp', requestPhoneOtp);             // Request OTP for existing user phone

export default router;
