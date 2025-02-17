import { useState, useEffect, useCallback } from "react";

const Filters = ({ setSortOption, setPriceRange, setCategory,priceRange }) => {
 

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange([0, value]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="p-4 font-bold rounded-md mb-2 mt-[80px] flex flex-col sm:flex-row">
    <div className="mb-4 space-x-4 sm:space-x-0 sm:flex-1">
      <label className="inline-block text-black">Sort By</label>
      <select onChange={handleSortChange} className="mt-1 inline-block w-full p-2 border border-gray-300 rounded-md sm:w-[200px]">
        <option value="">None</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
    <div className="mb-4 space-x-4 sm:space-x-0 sm:flex-1 ">
      <label className="inline-block text-black">Category</label>
      <select onChange={handleCategoryChange} className="mt-1 inline-block w-full p-2 border border-gray-300 rounded-md sm:w-[200px]">
        <option value="all">All</option>
        <option value="Casual Shirt">Casual Shirt</option>
        <option value="Denim Jeans">Denim Jeans</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Sunglasses">Sunglasses</option>
        <option value="Handbag">Handbag</option>
      </select>
    </div>
    <div className="mt-4 sm:mt-0 inline-block sm:flex-1">
      <label className="inline-block text-black">Price Range</label>
      <input 
        type="range" 
        min="299" 
        max="10000" 
        step="100" 
        value={priceRange[1]} 
        onChange={handlePriceChange} 
        className="mt-1 block w-full sm:w-[400px]  h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-900"
      />
      <div className="flex justify-between text-black">
        <span>$0</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  </div>
  );
};

export default Filters;
