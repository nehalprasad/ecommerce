import React, { useState } from 'react';

const TextField = ({
  label = "",
  placeholder = "",
  required = false,
  value = "",
  onChange,
  password = false,
  error = "",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative mb-4">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        placeholder={placeholder}
        type={password ? (isPasswordVisible ? "text" : "password") : "text"}
        // value={value}
        onChange={onChange}
        className={`bg-gray-100 text-black w-full px-2 rounded border-2 border-black ${error ? 'border-red-500' : ''}`}
      />
      {password && (
        <button
          type="button"
          onClick={handleToggleVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
        >
          {isPasswordVisible ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zM12 9a3 3 0 100 6 3 3 0 000-6z"></path>
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 00-6 0 3 3 0 006 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.003 12S5.003 5 12 5c6.997 0 9.997 7 9.997 7S18.997 19 12 19c-6.997 0-9.997-7-9.997-7z"></path>
            </svg>
          )}
        </button>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {required && <p className="text-xs text-right">Required</p>}
    </div>
  );
};

export default TextField;