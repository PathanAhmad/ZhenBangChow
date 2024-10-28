// src/screens/RegisterScreen.jsx
import { useState } from 'react';
import { initiateRegistration, completeRegistration } from '../api/userApi';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      // Step 1: Trigger OTP request
      try {
        await initiateRegistration({ name, email, phone, password });
        setOtpSent(true);
      } catch (error) {
        console.error('Error initiating registration:', error);
      }
    } else {
      // Step 2: Verify OTP and complete registration
      try {
        await completeRegistration(phone, otp);
        alert('Registration successful!');
      } catch (error) {
        console.error('Error completing registration:', error);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        <button type="submit">{otpSent ? 'Verify OTP' : 'Register'}</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
