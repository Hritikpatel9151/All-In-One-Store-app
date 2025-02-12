import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const CustomToastNotLoggedIn = () => {
  return (
    <div className="flex items-center bg-white border border-gray-300 p-4 rounded-lg shadow-lg">
      <FaExclamationCircle className="text-red-500 text-2xl mr-3" />
      <div>
        <h3 className="text-lg font-semibold">Action Required</h3>
        <p className="text-gray-600">Please log in to add items to your cart or wishlist.</p>
      </div>
    </div>
  );
}

export default CustomToastNotLoggedIn;