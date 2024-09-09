import React from 'react'
import { TextField } from '../../../components'

function SignIn() {
  return (
    <div className='flex justify-center items-center flex flex-row'>
        <TextField label='Email' placeholder='Enter Email' required  />
        <TextField label='Password' placeholder='Enter Password' required password />
    </div>
  )
}

export default SignIn