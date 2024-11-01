/* eslint-disable no-unused-vars */
import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/menu" className="hover:text-gray-400">Menu</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
