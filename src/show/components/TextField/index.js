import React from 'react';

import {
  togglePasswordVisibility,
  useTextField,
  handleChange,
  validate
} from './bindings'

const TextField = ({
  required = false,
  name = "name",
  type = 'text',
  label = "",
  placeholder = "",
  value = "",
  onChange = () => { },
  rightIcon: RightIcon = () => null,
  leftIcon: LeftIcon = () => null,
  className = ''
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
      <div className={`${className} flex justify-between flex-row w-full border rounded-md textclr p-1 ${textField.borderColor} focus:outline focus:outline-offset-0 focus:outline-none items-center`}>
        <LeftIcon className="mr-1"/>
        <input
          type={textField.inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e, validate, textField.setError, onChange)}
          onBlur={handleBlur}
          onFocus={() => textField.setFocused(true)}
          className={`outline-none ${className} w-10/12`}
        />
        <div className='cursor-pointer w-1/12' onClick={() => togglePasswordVisibility(textField.inputType, textField.setInputType)}>
          <RightIcon />
        </div>
      </div>

      {required && textField.error && (
        <p className={`${textField.errorColor} textclr mt-1 text-end`}>
          {textField.error}
        </p>
      )}
    </div>
  );
};

export default TextField;
