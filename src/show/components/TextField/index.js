import React, { useState } from 'react';
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

  const validate = (value) => {
    if (type === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setError('Invalid email address');
        return;
      }
    } else if (type === 'password') {
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!passwordPattern.test(value)) {
        setError('Password must be at least 8 characters long and include at least one number and one special character');
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
        <label className="block mb-1 font-medium text-zinc-400" style={{ fontSize: "0.6rem" }}>
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
          {inputType === 'password' ? (
            <svg className="h-2.5 w-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zM12 9a3 3 0 100 6 3 3 0 000-6z"></path>
            </svg>
          ) : (
            <svg className="h-2.5 w-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 00-6 0 3 3 0 006 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.003 12S5.003 5 12 5c6.997 0 9.997 7 9.997 7S18.997 19 12 19c-6.997 0-9.997-7-9.997-7z"></path>
            </svg>
          )}
        </button>
      )}
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};

export default TextField;