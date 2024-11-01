/* eslint-disable no-unused-vars */
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeScreen from './screens/HomeScreen.jsx';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      </Routes>
  </Router>
  )
}

export default App
