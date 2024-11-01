/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TextField, Switch, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function FilterComponent({onSearchChange, onToggleChange}) {
    const [isVeg, setIsVeg] = useState(false);

    const handleToggle = () => {
        setIsVeg(!isVeg);
        onToggleChange(!isVeg);
    };

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        onSearchChange(searchTerm);
    };

    return (
        <div className="flex items-center justify-between bg-white py-4 px-6 shadow-md rounded-lg max-w-screen-lg mx-auto">
            {/* Search Bar */}
            <div className="flex items-center w-1/4">
                <SearchIcon className="mr-2 text-gray-600" />
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    fullWidth
                    InputProps={{ className: "bg-white" }}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Toggle for Veg/Non-Veg */}
            <div className="flex items-center space-x-4">
                <FormControlLabel
                    control={<Switch checked={isVeg} onChange={handleToggle} color="primary" />}
                    label={isVeg ? 'Veg' : 'Non-Veg'}
                />
            </div>
        </div>
    );
}

export default FilterComponent;
