import React, { useState } from 'react';
import { EyeIcon } from "../../assets/svg";

const useTextField = (type, value) => {
  const [error, setError] = useState('');
  const [inputType, setInputType] = useState(type);
  const [focused, setFocused] = useState(false);
  const errorColor = `text-${value.trim() === '' ? 'red' : 'blue'}-500`;
  const borderColor =
    focused || value.trim() !== ''
      ? 'border-blue-400'
      : error
      ? 'border-red-500'
      : 'border-gray';
  return { error, setError, inputType, setInputType, focused, setFocused, errorColor, borderColor };
};

const validate = (type, value, setError) => {
  const validationRules = {
    text: {
      pattern: /^[a-zA-Z\s]+$(2)/,
      errorMessage: 'Required',
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: 'Required',
    },
    password: {
      pattern: /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/,
    },
    invitationCode: {
      pattern: /^[A-Za-z0-9]+$(5)/,
      errorMessage: 'Required',
    },
  };

  if (validationRules[type]) {
    const { pattern, errorMessage } = validationRules[type];
    if (!pattern.test(value)) {
      setError(errorMessage);
      return false;
    }
  }
  setError('');
  return true;
};

const handleChange = (e, validate, setError, onChange) => {
  const { value } = e.target;
  validate(e.target.type, value, setError);
  onChange(value);
};

const togglePasswordVisibility = (inputType, setInputType) => {
  setInputType(inputType === 'password' ? 'text' : 'password');
};

const TextField = ({
  name = "name",
  type = 'text',
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  const textField = useTextField(type, value);
  const handleBlur = () => {
    textField.setFocused(false);
  };

  return (
    <div className="relative mb-1">
      {label && (
        <label className="textclr font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        type={textField.inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e, validate, textField.setError, onChange)}
        onBlur={handleBlur}
        onFocus={() => textField.setFocused(true)}
        className={`w-full border rounded-md textclr p-1 ${textField.borderColor} focus:outline focus:outline-offset-0 focus:outline-none`}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePasswordVisibility(textField.inputType, textField.setInputType)}
          className="absolute pt-2 right-2"
        >
          <EyeIcon className="h-2.5 w-2.5 text-gray-600" />
        </button>
      )}
      {textField.error && (
        <p className={`${textField.errorColor} textclr mt-1 text-end`}>
          {textField.error}
        </p>
      )}
    </div>
  );
};

export default TextField;