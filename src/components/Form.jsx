import React, { useState } from 'react';
import Input from './UI/Input';
import Label from './UI/Label';

const Form = ({ setData }) => {
  const [ownerName, setOwnerName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState('Cannot be blank');
  const [nameValid, setNameValid] = useState(false);

  const nameHandler = (e) => {
    setOwnerName(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 25) {
      setNameError('Cardholder name must be longer that 5 and  shorter than 25 symbols');
      setNameValid(false);
      if (!e.target.value) {
        setNameError('Cannot be blank');
        setNameValid(false);
      }
    } else {
      setNameError('');
      setNameValid(true);
    }
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberTouched, setNumberTouched] = useState(false);
  const [cardNumberError, setNumberError] = useState('Cannot be blank');
  const [cardNumberValid, setCardNumberValid] = useState(false);

  const numberHandler = (e) => {
    setCardNumber(e.target.value);
    setCardNumber((e.target.value = e.target.value.replace(/[^\d\s]/g, '')));
    if (e.target.value.length < 19 || e.target.value.length > 19) {
      setNumberError('Wrong card number!');
      setCardNumberValid(false);
      if (!e.target.value) {
        setNumberError('Cannot be blank');
        setCardNumberValid(false);
      }
    } else {
      setNumberError('');
      setCardNumberValid(true);
    }
  };

  const [month, setMonth] = useState('');
  const [monthTouched, setMonthTouched] = useState(false);
  const [monthError, setMonthError] = useState('Enter month');
  const [monthValid, setMonthValid] = useState(false);

  const monthHandler = (e) => {
    setMonth(e.target.value);
    setMonth((e.target.value = e.target.value.replace(/[^\d]/g, '')));

    if (!e.target.value) {
      setMonthError('Enter month');
      setMonthValid(false);
    } else {
      setMonthError('');
      setMonthValid(true);
    }

    if (e.target.value.length > 2) {
      setMonth((e.target.value = e.target.value.slice(0, 2)));
    } else {
      setMonthError('');
      setMonthValid(true);
    }

    if (Number(e.target.value) > 12) {
      setMonthError('Wrong month');
      setMonthValid(false);
    } else {
      setMonthError('');
    }

    if (e.target.value === '0') {
      setMonthError('Enter correct month');
      setMonthValid(false);
    }
  };

  const [year, setYear] = useState('');
  const [yearTouched, setYearTouched] = useState(false);
  const [yearError, setYearError] = useState('Enter year');
  const [yearValid, setYearValid] = useState(false);

  const yearHandler = (e) => {
    setYear(e.target.value);
    setYear((e.target.value = e.target.value.replace(/[^\d]/g, '')));
    if (e.target.value) {
      setYearError('');
      setYearValid(true);
    } else {
      setYearError('Enter year');
      setYearValid(false);
    }

    if (e.target.value.length > 4) {
      setYear((e.target.value = e.target.value.slice(0, 4)));
    }

    if (e.target.value.length < 4) {
      setYearError('Wrong year');
      setYearValid(false);
    }
  };

  const [cvc, setCvc] = useState('');
  const [cvcTouched, setCvcTouched] = useState(false);
  const [cvcError, setCvcError] = useState('Enter cvc');
  const [cvcValid, setCvcValid] = useState(false);

  const cvcHandler = (e) => {
    setCvc(e.target.value);
    setCvc((e.target.value = e.target.value.replace(/[^\d]/g, '')));
    if (e.target.value.length > 3) {
      setCvc((e.target.value = e.target.value.slice(0, 3)));
      setCvcError('');
      setCvcValid(true);
    }

    if (e.target.value.length < 3) {
      setCvcError('Wrong cvc');
      setCvcValid(false);
    } else {
      setCvcError('');
      setCvcValid(true);
    }
  };

  const isCompleted = nameValid && cardNumberValid && monthValid && yearValid && cvcValid;

  function submitForm(e) {
    setData(ownerName, cardNumber, month, year, cvc, isCompleted);
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameTouched(true);
        break;
      case 'number':
        setNumberTouched(true);
        break;
      case 'month':
        setMonthTouched(true);
        break;
      case 'year':
        setYearTouched(true);
        break;
      case 'cvc':
        setCvcTouched(true);
        break;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-[350px] m-auto">
      <div className="flex flex-col">
        <Label>CARDHOLDER NAME</Label>
        <Input
          onBlur={(e) => blurHandler(e)}
          name={'name'}
          value={ownerName}
          onChange={(e) => nameHandler(e)}
          placeholder={'e.g First name Second name'}
          clName={nameTouched && nameError ? 'border-red-500' : ''}
        />
        {nameTouched && nameError && <div className="text-red-500">{nameError}</div>}
      </div>

      <div className="flex flex-col">
        <Label>CARD NUMBER</Label>
        <Input
          onBlur={(e) => blurHandler(e)}
          name={'number'}
          value={cardNumber}
          onChange={(e) => numberHandler(e)}
          placeholder={'e.g 1234 5678 9123 0000'}
          clName={cardNumberTouched && cardNumberError ? 'border-red-500' : ''}
        />
        {cardNumberTouched && cardNumberError && (
          <div className="text-red-500">{cardNumberError}</div>
        )}
      </div>

      <div className="flex w-full mb-5">
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <Label>EXP. DATE (MM/YY)</Label>
            <div>
              <Input
                onBlur={(e) => blurHandler(e)}
                name={'month'}
                value={month}
                onChange={(e) => monthHandler(e)}
                placeholder={'MM'}
                clName={
                  monthTouched && monthError ? 'border-red-500 w-[80px] mr-2' : 'w-[80px] mr-2'
                }
              />
              <Input
                onBlur={(e) => blurHandler(e)}
                name={'year'}
                value={year}
                onChange={(e) => yearHandler(e)}
                placeholder={'YY'}
                clName={yearTouched && yearError ? 'border-red-500 w-[80px]' : 'w-[80px]'}
              />
              <div className="flex text-sm w-full justify-between items-center">
                <div className="text-red-500 w-1/2">
                  {monthTouched && monthError && <div>{monthError}</div>}
                </div>
                <div className="text-red-500 w-1/2">
                  {yearTouched && yearError && <div>{yearError}</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <Label>CVC</Label>
            <Input
              onBlur={(e) => blurHandler(e)}
              name={'cvc'}
              value={cvc}
              onChange={(e) => cvcHandler(e)}
              placeholder={'e.g 123'}
              clName={cvcTouched && cvcError ? 'border-red-500' : ''}
            />
            {cvcTouched && cvcError && <div className="text-red-500">{cvcError}</div>}
          </div>
        </div>
      </div>
      <button
        onClick={() => submitForm()}
        onKeyDown={(e) => submitForm(e)}
        type="button"
        className="w-full bg-purple-900 text-white py-4 rounded-md hover:bg-purple-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!nameValid || !cardNumberValid || !monthValid || !yearValid || !cvcValid}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
