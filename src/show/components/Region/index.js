import React from 'react';
import Dropdown from '../Dropdown'; 

const regions = [
  'Choose',
  'United Kingdom',
  'United States',
];

const Region = ({ inputs, handleInputChange, setInputs }) => (
  <Dropdown
    name="region"
    value={inputs.region}
    options={regions}
    onChange={(e) => handleInputChange('region', e.target.value, setInputs)}
    label="Select Region"
  />
);

export default Region;