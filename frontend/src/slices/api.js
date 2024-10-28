import axios from 'axios';
const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL
const api = axios.create({
  baseURL: API_URL, // Use your backend URL
});

export const loginUser = async (phone, password) => {
    const response = await axios.post(`${API_URL}/login`, { phone, password });
    return response.data; // Assuming your backend returns user data
  };
  
  export const registerUser = async (name, phone, password) => {
    const response = await axios.post(`${API_URL}/register`, { name, phone, password });
    return response.data; // Assuming your backend returns user data
  };

export default api;
