import React from 'react';

const Button = ({
  type = 'button',
  disabled = false,
  isFormValid = true,
  onClick = () => {},
  children = null,
  className = '',
}) => (
  <button
    type={type}
    disabled={disabled || !isFormValid}
    onClick={onClick}
    className={`w-full p-1.5 mt-4 text-white font-semibold text-xs rounded-full ${
      isFormValid ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'
    } ${className}`}
  >
    {children}
  </button>
);

export default Button;
