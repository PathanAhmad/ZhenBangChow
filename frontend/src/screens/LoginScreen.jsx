/* eslint-disable no-unused-vars */
import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../slices/authSlice'; // Assuming an authSlice for handling authentication actions
import '../styles/LoginScreen.css';
import { loginUser, registerUser, verifyRegisterOtp } from '../slices/api'; 
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState(''); // OTP field
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setMessage('');
    try {
        if (isLogin) {
          const data = await loginUser(email, password);
          // console.log("Login successful:", data);
          setMessage("Login successful!");
          navigate('/home');
        } else {
          if (!showOtpField) {
            // Step 1: Initiate registration by sending OTP
            const data = await registerUser(name, phone, email, password);
            setMessage("OTP sent to phone. Please enter it to complete registration.");
            setShowOtpField(true); // Display OTP field
          } else {
            // Step 2: Verify OTP to complete registration
            const data = await verifyRegisterOtp(phone, otp);
            setMessage("Registration successful!");
            navigate('/home');
          }
        }
      } catch (error) {
        console.error(error);
        setMessage("An error occurred. Please try again.");
      }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
      {!isLogin && !showOtpField && (
        <>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />

          </div>
          <div>
              <label>Phone Number:</label> {/* Additional Phone number field */}
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required />
          </div>
        </>
          
          
        )}
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {showOtpField && (
          <div>
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : showOtpField ? 'Verify OTP' : 'Register'}</button>
        {/* <button type="submit">{isLogin ? 'Login' : 'Register'}</button> */}
      </form>
      {message && <p>{message}</p>} {/* Display success/error message */}
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        className="toggle-button"
      >
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default LoginScreen;
