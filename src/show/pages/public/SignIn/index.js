
import React, { useState } from 'react';
import { Button, TextField } from '../../../components'; 

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors] = useState({
    email: '',
    password: '',
  }); 

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isFormValid = Object.entries(errors).every(([key, error]) => !error && inputs[key] !== '');

  return (
    <div className="flex justify-center mt-6">
      <div className="w-64 bg-white">
        <h2 className=" text-2xl font-bold mb-4">Sign in</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <TextField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={inputs.email}
            onChange={(value) => handleInputChange('email', value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={inputs.password}
            onChange={(value) => handleInputChange('password', value)}
            required
            hasEye={true}
          />
          <Button
            type="submit"
            isFormValid={isFormValid}
          >
            Sign in
          </Button>
          <p className="mt-1 text-center font-semibold text-xs text-pink-700">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};


export default SignIn;