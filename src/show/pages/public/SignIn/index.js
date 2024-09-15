import React from "react";
import { Split, TextField } from "../../../components";

function SignIn() {
  return (
    <Split
      rightContent={
        <div className="flex justify-center items-center flex-col">
          <TextField label="Email" placeholder="Enter Email" required />
          <TextField
            label="Password"
            placeholder="Enter Password"
            required
            password
          />
        </div>
      }
    />
  );
}

export default SignIn;
