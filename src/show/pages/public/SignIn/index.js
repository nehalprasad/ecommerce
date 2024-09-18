import React, { useState } from 'react';
import { Button, TextField, Split } from '../../../components';
import '../../../styles/style.css';
import LeftImage from "../../../assets/img/image.jpg";

const handleInputChange = (name, value, setInputs) => {
  setInputs((prev) => ({ ...prev, [name]: value }));
};
const handleSubmit = (e) => {
  e.preventDefault();
};

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors] = useState({
    email: '',
    password: '',
  });

  const isFormValid = Object.entries(errors).every(([key, error]) => !error && inputs[key] !== '');

  return (
    <Split 
      leftContent={<img src={LeftImage} alt="Left side" className="object-cover h-full w-full" />}
      rightContent={
        <div className="flex justify-center my-24">
          <div className="w-64 bg-white">
            <h2 className="texthead font-bold mb-4">Sign in</h2>
            <form onSubmit={handleSubmit} className="signin-form">
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={inputs.email}
                onChange={(value) => handleInputChange('email', value, setInputs)}
                required
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={inputs.password}
                onChange={(value) => handleInputChange('password', value, setInputs)}
                required
              />
              <Button
                type="submit"
                isFormValid={isFormValid}
              >
                Sign in
              </Button>
              <p className="textclr mt-1 text-center text-pink">Forgot Password?</p>
            </form>
          </div>
        </div>
      }
    />
  );
};

export default SignIn;