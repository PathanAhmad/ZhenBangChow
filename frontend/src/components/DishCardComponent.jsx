/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/DishCard.js
import React from 'react';

function DishCardComponent({ dish }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded-md mb-2" />
      <h4 className="font-semibold text-lg">{dish.name}</h4>
      <p className="text-gray-600 mb-1">{dish.description}</p>
      <p className="font-bold text-blue-600">${dish.price}</p>
    </div>
  );
}

export default DishCardComponent;
