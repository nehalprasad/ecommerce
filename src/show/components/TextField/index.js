import React from "react";

const TextField = ({
  label = "",
  placeholder = "",
  required = false,
  value = "",
  password = false,
}) => (
  <div>
    <h6>{label}</h6>
    <input
      placeholder={placeholder}
      type={password ? "password" : "text"}
      password={true}
      className="bg-gray-100 text-black w-64 px-2 rounded border-2 border-black"
    //   value={value}
    />
    <h6 className="text-xs text-right">{required && "required"}</h6>
  </div>
);

export default TextField;
