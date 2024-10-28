// src/screens/LoginScreen.jsx
import { useState } from 'react';
import { loginWithEmail, loginWithPhoneOtp, requestPhoneOtp } from '../api/userApi';

const LoginScreen = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);

  const toggleLoginMethod = () => setIsEmailLogin(!isEmailLogin);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (isEmailLogin) {
        // Email login
        await loginWithEmail(email, password);
        alert('Login successful!');
      } else if (otpRequested) {
        // OTP login
        await loginWithPhoneOtp(phone, otp);
        alert('Login successful!');
      } else {
        // Request OTP
        await requestPhoneOtp(phone);
        setOtpRequested(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        {isEmailLogin ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {otpRequested && (
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
          </>
        )}
        <button type="submit">{isEmailLogin || otpRequested ? 'Login' : 'Request OTP'}</button>
      </form>
      <button onClick={toggleLoginMethod}>
        {isEmailLogin ? 'Use Phone/OTP' : 'Use Email/Password'}
      </button>
    </div>
  );
};

export default LoginScreen;
