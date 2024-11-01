/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/DishesList.js
import React from 'react';
import DishCardComponent from './DishCardComponent';

function DishesListComponent({ dishes, dishRefs}) {
  return (
    <div className="p-4 w-3/4 h-[750px] overflow-y-auto"> {/* Set a fixed height and enable vertical scrolling */}
    <div className="grid grid-cols-2 gap-6">
      {dishes.map((dish, index) => (
        <div ref={el => (dishRefs.current[index] = el)} key={dish.id} data-category-key={dish.key}>
          <DishCardComponent dish={dish} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default DishesListComponent;
