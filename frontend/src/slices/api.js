import axios from 'axios';
const API_URL = 'http://localhost:5000/api/users'; // Replace with your backend URL
const api = axios.create({
  baseURL: API_URL, // Use your backend URL
});

export const loginUser = async (email, password) => {
  try{
    console.log("login api: "+`${API_URL}/login`+ "PARAMS:"+ email+" "+ password);
    const response = await api.post(`${API_URL}/login`, { email, password });
      return response.data; // Assuming your backend returns user data  
  } catch(error){
    console.log("error in service loginUser with code:"+ error)
  }
 
  };
  
  export const registerUser = async (name, phone, email, password) => {
    try{
      console.log("register api"+`${API_URL}/register`);
      const response = await api.post(`${API_URL}/register/initiate`, { name, phone, email, password });
      return response.data; // Assuming your backend returns user data
    } catch(error) {
      console.log("error in service registerUser with code:"+ error)
    }

  };
  
  export const verifyRegisterOtp = async (phone, otp) => {
    try{
    console.log("verify otp api: "+`${API_URL}/register/complete`+ " PARAMS: phone="+ phone + " otp=" + otp);
    const response = await api.post(`${API_URL}/register/complete`, { phone, otp });
    return response.data;
  } catch(error) {
    console.log("error in service verifyRegisterOtp with code:"+ error)
  }
  };
export default api;
