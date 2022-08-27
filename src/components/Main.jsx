import React, { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import Form from './Form';
import ThankYou from './ThankYou';

const Main = () => {
  const [ownerName, setOwnerName] = useState('OWNER NAME');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  const [isCompleted, setIsCompleted] = useState(false);

  const setData = (ownerName, cardNumber, month, year, cvc, isCompleted) => {
    setOwnerName(ownerName);
    setCardNumber(cardNumber);
    setMonth(month);
    setYear(year);
    setCvc(cvc);
    setIsCompleted(isCompleted);

    if (Number(month < 10)) {
      setMonth('0' + month);
    }
    console.log(ownerName, cardNumber, month, year, cvc);
  };

  const reset = () => {
    setIsCompleted(false);
  };

  return (
    <div className="h-screen w-full flex items-center xs:flex-col lg:flex-row">
      <div className="bg-gradient-to-r from-fuchsia-900 to-indigo-900 p-5 w-full flex items-center justify-center h-1/3 relative lg:h-full lg:w-1/3">
        <div className="flex flex-col-reverse absolute xs:top-6 lg:top-1/2 lg:translate-y-[-50%] lg:left-1/3 lg:flex-col md:left-1/3">
          <CardFront onwerName={ownerName} cardNumber={cardNumber} month={month} year={year} />
          <CardBack cvc={cvc} />
        </div>
      </div>
      <div className="flex items-center bg-white lg:w-2/3 lg:justify-center xs:mt-24 lg:mt-0">
        <div>{isCompleted ? <ThankYou reset={reset} /> : <Form setData={setData} />}</div>
      </div>
    </div>
  );
};

export default Main;
