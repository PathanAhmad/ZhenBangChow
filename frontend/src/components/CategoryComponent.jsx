/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/MenuCategories.js
import React from 'react';

function CategoryComponent({ categories, selectedCategoryKey, onSelectCategoryKey, dishRefs, dishes }) {
  const handleCategoryClick = (category) => {
    onSelectCategoryKey(category.key);
    const firstDishIndex = dishes.findIndex(dish => dish.key === category.key);
    if (firstDishIndex !== -1) {
        dishRefs.current[firstDishIndex]?.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
      <div className="w-1/4 p-4 bg-white shadow-lg h-screen sticky top-0">
      <h2 className="text-black text-xl font-bold">Menu</h2>
      <ul className="mt-4">
          {categories.map((category) => (
              <li
                  key={category.key}
                  className={`cursor-pointer p-2 ${selectedCategoryKey === category.key ? 'bg-orange-500 text-white' : 'hover:bg-orange-400 text-black'}`}
                  onClick={() => handleCategoryClick(category)}
              >
                  {category.name}
              </li>
          ))}
      </ul>
  </div>
  );
}

export default CategoryComponent;
