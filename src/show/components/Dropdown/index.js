import React from 'react';
import I18n from'../../../process/locales/I18n';

const Dropdown = ({ name, value, options, onChange, label }) => (
  <div className="mt-3 textclr text-zinc-400">
    <label className="font-medium block mb-1">{I18n.t('signUp:regionPlaceholder')}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md p-1 focus:outline focus:outline-offset-0 focus:outline-blue-500"
      required
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;