import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

function ThankYou({ reset }) {
  return (
    <div className="w-[380px] flex flex-col justify-center items-center">
      <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-r from-indigo-700 to-purple-900 flex items-center justify-center text-2xl mb-5">
        <AiOutlineCheck className="text-white" />
      </div>
      <h1 className="text-[22px] font-medium mb-3 tracking-wider">THANK YOU!</h1>
      <p className="text-gray-600 mb-12">We`ve added your card details</p>
      <button
        onClick={reset}
        className="w-full bg-purple-900 text-white py-[10px] rounded-md hover:bg-purple-800">
        Continue
      </button>
    </div>
  );
}

export default ThankYou;
