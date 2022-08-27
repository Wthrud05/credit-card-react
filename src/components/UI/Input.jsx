import React from 'react';

const Input = ({ name, clName, placeholder, onChange, onBlur }) => {
  const defaultCls = [
    'border-2',
    'border-gray-300',
    'px-2',
    'py-1',
    'rounded-md',
    'w-full',
    'transition',
    'transition-200',
    'focus:outline-2',
    'focus:outline-indigo-700',
  ];
  const cls = [...defaultCls, clName];
  return (
    <input
      name={name}
      className={cls.join(' ')}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
