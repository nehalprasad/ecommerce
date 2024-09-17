import React, { useState } from 'react';
import { EyeIcon } from "../../assets/svg";

const validate = (type, value, setError) => {
  const validationRules = {
    email: {
      pattern: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
      errorMessage: 'Invalid email address'
    },
    password: {
      pattern: /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/,
      errorMessage: 'Password must be at least 8 characters long and include at least one number and one special character'
    }
  };

  if (validationRules[type]) {
    const { pattern } = validationRules[type];
    if (!pattern.test(value)) {
      return;
    }
  }
  setError('');
};

const handleChange = (e, validate, setError, onChange) => {
  const { value } = e.target;
  validate(e.target.type, value, setError);
  onChange(value);
};

const togglePasswordVisibility = (inputType, setInputType) => {
  setInputType(inputType === 'password' ? 'text' : 'password');
};
//  const [error, setError] = useState('');
//   const [inputType, setInputType] = useState(type);

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

  return (
    <div className="relative mb-4">
      {label && (
        <label className="block mb-1 textclr font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e, validate, setError, onChange)}
        className={`w-full border border-1 rounded-md textclr p-1 ${error ? 'border-red-500' : 'border-gray-300'} focus:outline focus:outline-offset-0 focus:outline-blue-500`}
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
      {error && <p className="text-red-500 textclr mt-1">{error}</p>}
    </div>
  );
};

export default TextField;