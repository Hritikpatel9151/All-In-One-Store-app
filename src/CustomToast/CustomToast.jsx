import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CustomToast = () => {
  return (
    <div className="flex items-center bg-white border border-gray-300 p-4 rounded-lg shadow-lg">
      <FaCheckCircle className="text-green-500 text-2xl mr-3" />
      <div>
        <h3 className="text-lg font-semibold">Order Placed Successfully!</h3>
        <p className="text-gray-600">Thank you for your purchase.</p>
      </div>
    </div>
  );
}

export default CustomToast;