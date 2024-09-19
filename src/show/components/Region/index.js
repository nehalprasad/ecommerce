import React from 'react';

const regions = [
  'Choose',
  'United Kingdom',
  'United States',
];

const Region = ({ inputs, handleInputChange, setInputs }) => {
  return (
    <div className="mt-3 textclr text-zinc-400">
      <label className="font-medium block mb-1">Select Region</label>
      <select
        name="region"
        value={inputs.region}
        onChange={(e) => handleInputChange('region', e.target.value, setInputs)}
        className="w-full border rounded-md p-1 focus:outline focus:outline-offset-0 focus:outline-blue-500"
        required
      >
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Region;