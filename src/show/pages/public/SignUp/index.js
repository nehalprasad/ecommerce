import React, { useState } from 'react';
import { Button, TextField, Split, Region } from '../../../components';
import '../../../styles/style.css';
import LeftImage from "../../../assets/img/image.jpg";

const handleInputChange = (name, value, setInputs) => {
  setInputs((prev) => ({ ...prev, [name]: value }));
};
const handleSubmit = (e) => {
  e.preventDefault();
};

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    region: '',
    invitationCode: '',
  });
  const [errors] = useState({
    email: '',
    password: '',
    region: '',
    invitationCode: '',
  });

  const isFormValid = Object.entries(errors).every(([key, error]) => !error && inputs[key] !== '');
  

  return (
    <Split 
      leftContent={<img src={LeftImage} alt="Left side" className="object-cover h-full w-full" />}
      rightContent={
        <div className="flex justify-center my-5">
          <div className="w-64 bg-white">
            <h2 className="text-2xl font-bold mb-4">Create your account</h2>
            <form onSubmit={handleSubmit} className="signup-form">
            <TextField
                label="Company name"
                type="text"
                name="Companyname"
                placeholder="Tesla"
                value={inputs.text}
                onChange={(value) => handleInputChange('text', value, setInputs)}
                required
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={inputs.email}
                onChange={(value) => handleInputChange('email', value, setInputs)}
                required
              />
              <Region
                  inputs={inputs}
                  handleInputChange={handleInputChange}
                  setInputs={setInputs}
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
              <TextField
                label="Invitation Code"
                type="text"
                name="invitationCode"
                placeholder="Enter Invitation Code"
                value={inputs.invitationCode}
                onChange={(value) => handleInputChange('invitationCode', value, setInputs)}
                required
              />

              <Button
                type="submit"
                isFormValid={isFormValid}
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      }
    />
  );
};

export default SignUp;
