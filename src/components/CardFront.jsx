import React from 'react';

const CardFront = ({ onwerName, cardNumber, month, year }) => {
  return (
    <div className="w-[320px] h-[160px] bg-gradient-to-r from-indigo-600 via-blue-500  to-pink-500 rounded-lg text-white text-xs p-5 mb-8 xs:mt-5 xs:absolute top-20 lg:sticky">
      <div className="flex items-center">
        <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
        <div className="w-[15px] h-[15px] border-solid border border-gray-300 rounded-full mx-2"></div>
      </div>
      <div>
        <div className="text-xl tracking-widest mt-5 flex justify-start">{cardNumber}</div>
      </div>
      <div className="flex justify-between mt-9">
        <p>{onwerName}</p>
        <p>
          {month}/{year}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
