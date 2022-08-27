import React from 'react';

const CardBack = ({ cvc }) => {
  return (
    <div className="w-[320px] h-[160px] bg-gray-200 rounded-lg text-white py-5 ml-10">
      <div className="w-full h-[35px] bg-zinc-800"></div>
      <div className="bg-gray-400 h-[25px] w-3/4 m-auto mt-4 rounded-sm flex justify-end items-center text-[10px]">
        <span className="px-2">{cvc}</span>
      </div>
      <div className="mt-5">
        <div className="m-auto w-1/2 bg-gray-400 h-[3px] mb-[5px] rounded-sm"></div>
        <div className="m-auto w-1/2 bg-gray-400 h-[3px] mb-[5px] rounded-sm"></div>
        <div className="m-auto w-1/2 bg-gray-400 h-[3px] rounded-sm"></div>
      </div>
    </div>
  );
};

export default CardBack;
