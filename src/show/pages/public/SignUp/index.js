import React, { useState } from 'react';
import { Button, TextField, Split, Region } from '../../../components';
import '../../../styles/style.css';
import LeftImage from "../../../assets/img/image.jpg";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

const validatePassword = (value) => {
  return {
    length: value.length >= 8,
    number: /\d/.test(value),
    specialCharacter: /[!@#$%^&*]/.test(value),
  };
};

const handleInputChange = (name, value, setInputs, setValidations) => {
  setInputs((prev) => ({ ...prev, [name]: value }));

  if (name === 'password') {
    if (value.length > 0) {
      setValidations(validatePassword(value));
    } else {
      setValidations({
        length: false,
        number: false,
        specialCharacter: false,
      });
    }
  }
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
    accepted: false,
  });

  const [validations, setValidations] = useState({
    length: false,
    number: false,
    specialCharacter: false,
  });

  const isFormValid = Object.values(validations).every(Boolean) && inputs.email && inputs.password && inputs.region && inputs.invitationCode && inputs.accepted;

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
                value={inputs.Companyname}
                onChange={(value) => handleInputChange('Companyname', value, setInputs, setValidations)}
                required
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={inputs.email}
                onChange={(value) => handleInputChange('email', value, setInputs, setValidations)}
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
                onChange={(value) => handleInputChange('password', value, setInputs, setValidations)}
                required
              />
              <div className="mt-2">
                {inputs.password && (
                  <>
                    <p className={`flex textclr ${validations.length ? 'text-green-500' : 'text-red-500'}`}>
                      {validations.length ? (
                        <CheckIcon className="h-4 w-4 mr-2" />
                      ) : (
                        <XMarkIcon className="h-4 w-4 mr-2" />
                      )}
                      {validations.length ? 'At least 8 characters' : 'At least 8 characters required'}
                    </p>
                    <p className={`flex textclr ${validations.number ? 'text-green-500' : 'text-red-500'}`}>
                      {validations.number ? (
                        <CheckIcon className="h-4 w-4 mr-2" />
                      ) : (
                        <XMarkIcon className="h-4 w-4 mr-2" />
                      )}
                      {validations.number ? 'Contains a number' : 'Number required'}
                    </p>
                    <p className={`flex textclr ${validations.specialCharacter ? 'text-green-500' : 'text-red-500'}`}>
                      {validations.specialCharacter ? (
                        <CheckIcon className="h-4 w-4 mr-2" />
                      ) : (
                        <XMarkIcon className="h-4 w-4 mr-2" />
                      )}
                      {validations.specialCharacter ? 'Contains a special character' : 'Special character required'}
                    </p>
                  </>
                )}
              </div>
              <TextField
                label="Invitation Code"
                type="text"
                name="invitationCode"
                placeholder="Enter Invitation Code"
                value={inputs.invitationCode}
                onChange={(value) => handleInputChange('invitationCode', value, setInputs, setValidations)}
                required
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={inputs.accepted}
                  onChange={(e) => handleInputChange('accepted', e.target.checked, setInputs, setValidations)}
                  className="mr-2"
                />
                <label className="textclr my-3">
                  I accept the terms and conditions
                </label>
              </div>

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