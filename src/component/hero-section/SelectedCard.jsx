import React from 'react';
import Operator from "../hero-section/assets/products/operation.png";

const SelectedCard = () => {
  return (
    <div className='w-[75%] mx-auto mt-20 mb-20 p-6 bg-blue-100 rounded-2xl border border-gray-200'>
      
      {/* Title */}
      <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>
      
      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {/* Single Cart Item */}
        <div className="flex items-center bg-white rounded-xl shadow p-4">
          <img src={Operator} alt="AI Writing Pro" className="w-10  rounded-full mr-4" />
          
          {/* Item Info */}
          <div className="flex-1">
            <p className="font-semibold text-lg">AI Writing Pro</p>
            <p className="text-gray-600">$29</p>
          </div>
          
          {/* Remove Button */}
          <button className="text-red-500 font-semibold hover:underline">
            Remove
          </button>
        </div>

        {/* তুমি চাইলে একাধিক item add করতে পারবে এখানে */}
      </div>
      
    </div>
  );
};

export default SelectedCard;