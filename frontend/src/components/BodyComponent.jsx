/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import MenuComponent from "./MenuComponent";
import MiscComponents from "./MiscComponents";
import FilterComponent from "./FilterComponent";
import MediaCarouselComponent from './MediaCarouselComponent';

function BodyComponent(){

      
    
    return(
        <div className="bg-white w-full pt-16">  {/* Outer container for white background */}
            <div className="max-w-screen-lg mx-auto px-2t"> {/* Inner container for content */}
                <MiscComponents />
                <FilterComponent 
                // onSearchChange={setSearchTerm}
                // onToggleChange={setIsVeg}
            />
                <MenuComponent />
            </div>
        </div>
    )

}

export default BodyComponent;