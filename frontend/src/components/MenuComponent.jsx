/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import DishesListComponent from './DishesListComponent';
import CategoryComponent from './CategoryComponent';
import { categories, dishes } from './sampleData';

function MenuComponent() {
  // State to hold the key of the currently selected category
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(categories[0].key);
  const dishRefs = useRef([]); // Ref to hold references to dish elements

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollTop = dishRefs.current[0]?.parentNode.scrollTop || 0; // Get current scroll position

      // Loop through dishRefs to find which dish is currently in view
      for (let i = 0; i < dishRefs.current.length; i++) {
        const dishEl = dishRefs.current[i];
        if (dishEl) {
          const { offsetTop, clientHeight } = dishEl; // Get the position and height of the dish

          // Check if the current scroll position is within the bounds of the dish
          if (scrollTop >= offsetTop - clientHeight / 2 && scrollTop < offsetTop + clientHeight / 2) {
            setSelectedCategoryKey(dishEl.dataset.categoryKey); // Update selected category key based on the dish in view
            break; // Exit loop once the category is found
          }
        }
      }
    };

    // Attach scroll event listener to the parent of the first dish
    const scrollContainer = dishRefs.current[0]?.parentNode;
    scrollContainer?.addEventListener('scroll', handleScroll);


    // Clean up event listener on unmount
    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   const filteredDishes = dishes.filter((dish) =>
//     dish.name.toLowerCase().includes((searchTerm || '').toLowerCase()) &&
//     (!isVeg || dish.isVeg)
// );
// console.log('Current searchTerm:', searchTerm);


  return (
    <div className="flex mt-5">
      <CategoryComponent 
        categories={categories} 
        selectedCategoryKey={selectedCategoryKey} 
        onSelectCategoryKey={setSelectedCategoryKey} 
        dishRefs={dishRefs}
        dishes={dishes}
      />
      <DishesListComponent dishes={dishes} dishRefs={dishRefs} /> {/* Pass all dishes to the component */}
    </div>
  );
}

export default MenuComponent;
