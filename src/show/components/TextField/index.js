import React, { useState } from 'react';
import { EyeIcon } from "../../assets/svg";
const TextField = ({
  name,
  type = 'text',
  label = "",
  placeholder = "",
  value = "",
  onChange,
  hasEye,
}) => {
  const [error, setError] = useState(''); 
  const [inputType, setInputType] = useState(type);

  const validate = (type, value) => {
    const validationRules = {
      email: {
        pattern: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
        errorMessage: 'Invalid email address'
      },
      password: {
        pattern: /^(?=.[0-9])(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/,
        errorMessage: 'Password must be at least 8 characters long and include at least one number and one special character'
      }
    };

    // Check if the type exists in the validation rules
    if (validationRules[type]) {
      const { pattern, errorMessage } = validationRules[type];
      if (!pattern.test(value)) {
        setError(errorMessage);
        return;
      }
    }

    setError('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    validate(value);
    onChange(value);
  };

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="relative mb-4">
      {label && (
        <label className="block mb-1 text-xs font-medium text-zinc-400">
          {label}
        </label>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`w-full border rounded-md text-xs p-1 ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
      />
      {hasEye && type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute pt-2 right-2"
        >
          <EyeIcon className="h-2.5 w-2.5 text-gray-600" />
        </button>
      )}

      {error && <p className="text-red-500 text-xs"> {error}</p>}
    </div>
  );
};

export default TextField;