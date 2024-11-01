/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// OtpModal.js
import React, { useState } from 'react';
import '../styles/OtpModal.css'; // Create a separate CSS file for styling

function OtpModal({ isOpen, onClose, onVerify }) {
  const [otp, setOtp] = useState('');

  if (!isOpen) return null; // Return null if modal is not open

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp); // Trigger verification function with OTP
  };

  return (
    <div className="otp-modal-overlay">
      <div className="otp-modal-content">
        <h3>Enter OTP</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default OtpModal;
