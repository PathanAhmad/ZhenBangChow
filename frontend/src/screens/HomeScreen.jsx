/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BodyComponent from '../components/BodyComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
// import { BodyComponent } from '../components/BodyComponent'
function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
  );
}

export default HomeScreen;