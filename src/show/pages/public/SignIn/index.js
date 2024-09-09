import React, { useState } from 'react'
import { TextField } from '../../../components'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='flex justify-center items-center flex flex-row'>
        <TextField label='Email' placeholder='Enter Email' required value={email} />
        <TextField label='Password' placeholder='Enter Password' required value={password} password />
    </div>
  )
}

export default SignIn