// src/api/userApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Initiate registration by sending OTP
export const initiateRegistration = async (userData) => {
  const response = await axios.post(`${API_URL}/register/initiate`, userData);
  return response.data;
};

// Complete registration after OTP verification
export const completeRegistration = async (phone, otp) => {
  const response = await axios.post(`${API_URL}/register/complete`, { phone, otp });
  return response.data;
};

// Login with email and password
export const loginWithEmail = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// Login with phone and OTP
export const loginWithPhoneOtp = async (phone, otp) => {
  const response = await axios.post(`${API_URL}/login/phone`, { phone, otp });
  return response.data;
};

// Request OTP for phone login
export const requestPhoneOtp = async (phone) => {
  const response = await axios.post(`${API_URL}/request-otp`, { phone });
  return response.data;
};
