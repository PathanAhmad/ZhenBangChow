/* eslint-disable no-unused-vars */
// src/components/Header.js
import React from 'react';

function HeaderComponent() {
  return (
    <header className="bg-orange-600 fixed top-0 left-0 right-0 p-4 text-white flex justify-between items-center z-50">
      <div className="text-xl font-bold">MyApp</div>
      <nav className="space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-red-600 px-3 py-1 rounded">Profile</button>
    </header>
  );
}

export default HeaderComponent;
