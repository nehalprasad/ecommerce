import React from 'react';
import PropTypes from 'prop-types';

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
    className={`w-full p-1 mt-3 text-white font-semibold text-xs rounded-full ${
      isFormValid ? 'bg-pink' : 'bg-gray-500 cursor-pointer'
    } ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  isFormValid: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;