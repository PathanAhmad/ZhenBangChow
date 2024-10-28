/* eslint-disable no-unused-vars */
import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../slices/authSlice'; // Assuming an authSlice for handling authentication actions
import '../styles/LoginScreen.css';
import { loginUser, registerUser } from '../slices/api'; 

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setMessage('');
    try {
        if (isLogin) {
          const data = await loginUser(phone, password);
          console.log("Login successful:", data);
          setMessage("Login successful!");
        } else {
          const data = await registerUser(name, phone, password);
          console.log("Registration successful:", data);
          setMessage("Registration successful!");
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
      {!isLogin && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
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
