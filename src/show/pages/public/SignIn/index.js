import React, { useState } from 'react';
import { Button, TextField, Split } from '../../../components';
import '../../../styles/style.css';
import LeftImage from "../../../assets/img/image.jpg";

import I18n from '../../../../process/locales/I18n';

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
            <h2 className="texthead font-bold mb-4">{I18n.t('signIn:signInTitle')}</h2>
            <form onSubmit={handleSubmit} className="signin-form">
              <TextField
                label="Email"
                type={I18n.t('signIn:email')}
                name="email"
                placeholder={I18n.t('signIn:emailPlaceholder')}
                value={inputs.email}
                onChange={(value) => handleInputChange('email', value, setInputs)}
                required
              />
              <TextField
                label={I18n.t('signIn:password')}
                type="password"
                name="password"
                placeholder={I18n.t('signIn:passwordPlaceholder')}
                value={inputs.password}
                onChange={(value) => handleInputChange('password', value, setInputs)}
                required
              />
              <Button
                type="submit"
                isFormValid={isFormValid}
              >
                {I18n.t('signIn:signIn')} 
              </Button>
              <p className="textclr mt-1 text-center text-pink">{I18n.t('signIn:forgetPassword')}</p>
            </form>
          </div>
        </div>
      }
    />
  );
};

export default SignIn;