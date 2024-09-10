
import React, { useState } from 'react';
import { TextField } from '../../../components'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    if (!value) return 'Email is required';
    return '';
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (!hasNumber.test(value)) return 'Password must contain at least one number';
    if (!hasLetter.test(value)) return 'Password must contain at least one letter';
    if (!hasSpecialChar.test(value)) return 'Password must contain at least one special character';
    return '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({ ...prevErrors, password: validatePassword(value) }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form>
          <TextField
            label="Email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleEmailChange}
            error={errors.email}
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            required
            password
            value={password}
            onChange={handlePasswordChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;