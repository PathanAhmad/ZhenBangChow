/* eslint-disable no-unused-vars */
import React from 'react';
import LoginScreen from './screens/LoginScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomeScreen from './screens/HomeScreen';
// import CartScreen from './screens/CartScreen';
// import ProductScreen from './screens/ProductScreen';
// import ProfileScreen from './screens/ProfileScreen';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginScreen />} />
      </Routes>
  </Router>
  )
}

export default App
