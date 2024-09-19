import React, { useState } from 'react';
import { EyeIcon } from "../../assets/svg";

const validate = (type, value, setError) => {
  const validationRules = {
    text: {
      pattern: /^[a-zA-Z\s]$/,
      errorMessage: 'required'
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
      errorMessage: 'required'
    },
    password: {
      pattern: /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/,
      errorMessage: 'Required'
    },
    invitationCode: {
      pattern: /^[A-Za-z0-9]$/,
      errorMessage: 'required'
    }
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
  const [error, setError] = useState('');
  const [inputType, setInputType] = useState(type);
  const errorColor = value.trim() === '' ? 'text-red-500' : 'text-blue-500';

  return (
    <div className="relative mb-1">
      {label && (
        <label className="textclr font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e, validate, setError, onChange)}
        className={`w-full border rounded-md textclr p-1 ${error ? 'border-red-500' : 'border-gray'} focus:outline focus:outline-offset-0 focus:outline-blue-500`}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePasswordVisibility(inputType, setInputType)}
          className="absolute pt-2 right-2"
        >
          <EyeIcon className="h-2.5 w-2.5 text-gray-600" />
        </button>
      )}
      {error && <p className={`${errorColor} textclr mt-1 text-end`}>{error}</p>}
    </div>
  );
};

export default TextField;